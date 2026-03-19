import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    microsoftId: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },

    // --- Plan ---
    plan: {
      type: String,
      enum: ["free", "individual", "company"],
      default: "free",
    },
    billingCycle: {
      type: String,
      enum: ["monthly", "yearly", null],
      default: null,
    },

    // --- Stripe ---
    stripeCustomerId: {
      type: String,
      default: null,
    },
    subscriptionId: {
      type: String,
      default: null,
    },
    subscriptionStatus: {
      type: String,
      enum: ["active", "canceled", "past_due", "trialing", "none"],
      default: "none",
    },
    currentPeriodEnd: {
      type: Date,
      default: null,
    },

    // --- Company / seats ---
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
      index: true,
    },
    role: {
      type: String,
      enum: ["owner", "member", null],
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // --- Stripe ---
    stripeCustomerId: {
      type: String,
      default: null,
    },
    subscriptionId: {
      type: String,
      default: null,
    },
    subscriptionStatus: {
      type: String,
      enum: ["active", "canceled", "past_due", "trialing", "none"],
      default: "none",
    },
    billingCycle: {
      type: String,
      enum: ["monthly", "yearly", null],
      default: null,
    },
    currentPeriodEnd: {
      type: Date,
      default: null,
    },

    // --- Seats ---
    seatLimit: {
      type: Number,
      default: 100,
    },
    seatCount: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema);

export const Company =
  mongoose.models.Company || mongoose.model("Company", CompanySchema);

export default User;
