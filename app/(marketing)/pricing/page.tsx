import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "./pricing-table";
import { Companies } from "@/components/companies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Bhartee AI",
  description:
  "Bhartee is a Comprehensive AI-Driven Solution for Hiring Top-Notch Candidates.",
  openGraph: {
    images: ["https://ibb.co/GFhr96j"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Simple pricing for your ease</Heading>
          <Subheading className="text-center">
          Different types of firms use Bhartee AI to efficiently identify and hire the best candidates from their applicant pool, significantly reducing the time required to meet their specific hiring needs.
          </Subheading>
        </div>
        <Pricing />
        <PricingTable />
        <Companies />
      </Container>
    </div>
  );
}
