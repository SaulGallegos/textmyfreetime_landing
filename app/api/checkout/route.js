import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

/**
 * POST /api/checkout
 * Creates a Stripe Checkout session for a subscription plan.
 * Body: { plan: "individual"|"company", billingCycle: "monthly"|"yearly", companyName?: string }
 * Returns: { url: string }
 */
export async function POST(request) {
  try {
    const { plan, billingCycle, companyName, email } = await request.json();

    if (!plan || !billingCycle) {
      return NextResponse.json(
        { error: 'plan and billingCycle are required' },
        { status: 400 },
      );
    }

    const allowedPlans = new Set(['individual', 'company']);
    const allowedBillingCycles = new Set(['monthly', 'yearly']);

    if (!allowedPlans.has(plan) || !allowedBillingCycles.has(billingCycle)) {
      return NextResponse.json(
        { error: 'Invalid plan or billingCycle' },
        { status: 400 },
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
    });

    const priceIds = {
      individual: {
        monthly: process.env.STRIPE_PRICE_INDIVIDUAL_MONTHLY,
        yearly: process.env.STRIPE_PRICE_INDIVIDUAL_YEARLY,
      },
      company: {
        monthly: process.env.STRIPE_PRICE_COMPANY_MONTHLY,
        yearly: process.env.STRIPE_PRICE_COMPANY_YEARLY,
      },
    };

    const priceId = priceIds?.[plan]?.[billingCycle];
    if (!priceId) {
      return NextResponse.json(
        {
          error:
            'Stripe price id not configured. Check STRIPE_PRICE_* environment variables.',
        },
        { status: 500 },
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (!appUrl) {
      return NextResponse.json(
        { error: 'NEXT_PUBLIC_APP_URL is not configured' },
        { status: 500 },
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      ...(email ? { customer_email: email.toLowerCase().trim() } : {}),
      metadata: {
        plan,
        billingCycle,
        ...(companyName ? { companyName } : {}),
      },
      subscription_data: {
        metadata: {
          plan,
          billingCycle,
        },
      },
      success_url: `${appUrl}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/?checkout=cancel&session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
