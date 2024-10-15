import { LoginForm } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Bhartee AI",
  description:
  "Bhartee is a Comprehensive AI-Driven Solution for Hiring Top-Notch Candidates.",
  openGraph: {
    images: ["https://ibb.co/0CmK9jM"],
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
