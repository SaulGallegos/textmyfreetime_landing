import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User, { Company } from "@/models/User";
import Stripe from "stripe";

export const runtime = "nodejs";

/**
 * POST /api/webhook
 * Stripe webhook handler for subscription lifecycle events.
 * Handles both individual and company subscriptions via metadata.plan.
 */
export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: "STRIPE_WEBHOOK_SECRET is not configured" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    });

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    await dbConnect();

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const customerEmail =
          session.customer_details?.email || session.customer_email;
        const stripeCustomerId = session.customer;
        const subscriptionId = session.subscription;
        const plan = session.metadata?.plan || "individual";
        const billingCycle = session.metadata?.billingCycle || "monthly";

        if (!customerEmail) break;

        if (plan === "company") {
          const user = await User.findOneAndUpdate(
            { email: customerEmail.toLowerCase() },
            {
              stripeCustomerId,
              plan: "company",
              role: "owner",
            },
            { upsert: true, new: true }
          );

          const companyName =
            session.metadata?.companyName || `${customerEmail}'s Team`;

          const company = await Company.findOneAndUpdate(
            { stripeCustomerId },
            {
              name: companyName,
              ownerId: user._id,
              stripeCustomerId,
              subscriptionId,
              subscriptionStatus: "active",
              billingCycle,
              seatLimit: 100,
              seatCount: 1,
            },
            { upsert: true, new: true }
          );

          await User.findByIdAndUpdate(user._id, { companyId: company._id });
        } else {
          await User.findOneAndUpdate(
            { email: customerEmail.toLowerCase() },
            {
              plan: "individual",
              stripeCustomerId,
              subscriptionId,
              subscriptionStatus: "active",
              billingCycle,
            },
            { upsert: true, new: true }
          );
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const status = subscription.status;
        const stripeCustomerId = subscription.customer;
        const currentPeriodEnd = subscription.current_period_end
          ? new Date(subscription.current_period_end * 1000)
          : null;

        const interval =
          subscription?.items?.data?.[0]?.price?.recurring?.interval;
        const billingCycle =
          interval === "year" ? "yearly" : interval === "month" ? "monthly" : null;

        const subscriptionStatus =
          status === "active"
            ? "active"
            : status === "past_due"
              ? "past_due"
              : status === "trialing"
                ? "trialing"
                : "canceled";

        const company = await Company.findOne({ stripeCustomerId });
        if (company) {
          await Company.findByIdAndUpdate(company._id, {
            subscriptionStatus,
            currentPeriodEnd,
            ...(billingCycle ? { billingCycle } : {}),
          });
          if (subscriptionStatus !== "active" && subscriptionStatus !== "trialing") {
            await User.updateMany(
              { companyId: company._id },
              { plan: "free", companyId: null, role: null }
            );
          }
        } else {
          const plan = subscriptionStatus === "active" || subscriptionStatus === "trialing"
            ? "individual"
            : "free";

          await User.findOneAndUpdate(
            { stripeCustomerId },
            {
              plan,
              subscriptionStatus,
              currentPeriodEnd,
              ...(billingCycle ? { billingCycle } : {}),
            }
          );
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const stripeCustomerId = subscription.customer;

        const company = await Company.findOne({ stripeCustomerId });
        if (company) {
          await User.updateMany(
            { companyId: company._id },
            {
              plan: "free",
              subscriptionStatus: "canceled",
              companyId: null,
              role: null,
            }
          );
          await Company.findByIdAndUpdate(company._id, {
            subscriptionStatus: "canceled",
            subscriptionId: null,
            billingCycle: null,
          });
        } else {
          await User.findOneAndUpdate(
            { stripeCustomerId },
            {
              plan: "free",
              subscriptionStatus: "canceled",
              subscriptionId: null,
              billingCycle: null,
            }
          );
        }
        break;
      }

      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 400 }
    );
  }
}
