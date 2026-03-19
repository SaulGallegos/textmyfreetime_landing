import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

/**
 * POST /api/user
 * Creates or finds a user by email.
 * Called by the extension when a user first signs in with Microsoft.
 * Body: { email: string, microsoftId?: string, name?: string }
 */
export async function POST(request) {
  try {
    const { email, microsoftId, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const updateData = { email: email.toLowerCase() };
    if (microsoftId) updateData.microsoftId = microsoftId;
    if (name) updateData.name = name;

    const user = await User.findOneAndUpdate(
      { email: email.toLowerCase() },
      {
        $setOnInsert: { plan: "free", subscriptionStatus: "none" },
        ...updateData,
      },
      { upsert: true, new: true }
    );

    return NextResponse.json(user);
  } catch (error) {
    console.error("User creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
