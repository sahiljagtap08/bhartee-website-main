import { SignupForm } from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - Bhartee AI",
  description:
  "Bhartee is a Comprehensive AI-Driven Solution for Hiring Top-Notch Candidates.",
  openGraph: {
    images: ["https://ibb.co/0CmK9jM"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
