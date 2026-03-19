import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User, { Company } from "@/models/User";

/**
 * GET /api/subscription?email=<email>
 * Returns the subscription status for a user.
 * The Chrome extension calls this to check read limits.
 */
export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl;
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email query parameter is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user || user.plan === "free") {
      return NextResponse.json({
        plan: "free",
        readLimit: 2,
        billingCycle: null,
        subscriptionStatus: "none",
      });
    }

    if (user.plan === "company" && user.companyId) {
      const company = await Company.findById(user.companyId);
      return NextResponse.json({
        plan: "company",
        readLimit: null,
        billingCycle: company?.billingCycle || null,
        subscriptionStatus: company?.subscriptionStatus || "none",
        companyName: company?.name || null,
        seatLimit: company?.seatLimit || 100,
        seatCount: company?.seatCount || 1,
        role: user.role,
      });
    }

    return NextResponse.json({
      plan: user.plan,
      readLimit: null,
      billingCycle: user.billingCycle,
      subscriptionStatus: user.subscriptionStatus,
    });
  } catch (error) {
    console.error("Subscription check error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
