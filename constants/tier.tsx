export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    priceMonthly: "$298/mo",
    priceYearly: "$3198/yr",
    description: "Best for developers trying to use the platform.",
    features: [
      "Access to core AI recruitment tools",
      "Limited number of job postings",
      "Email support within 48 hours",
      "Basic Analytics",
    ],
    featured: false,
    cta: "Buy Basic",
    onClick: () => {},
  },
  {
    name: "Standard",
    id: "tier-standard",
    href: "#",
    priceMonthly: "$598/mo",
    priceYearly: "$6498/yr",
    description: "Perfect for small businesses",
    features: [
      "Everything in Basic, plus",
      "Enhanced analyticsy",
      "Integration with major ATS platforms, and priority support.",
      "Email support within 24 hours",
    ],
    featured: false,
    cta: "Get Standard",
    onClick: () => {},
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "#",
    priceMonthly: "contact us",
    priceYearly: "Book a call",
    description: "Ideal for small to mid range startups",
    features: [
      "Everything in Standard, plus",
      "Email support within 12 hours",
      "Priority support",
      "Unlimited job postings",
      "Advanced AI driven insights",
      "Custom Branding",
      "Dedicated account management",

    ],
    featured: true,
    cta: "Go Premium",
    onClick: () => {},
  },

];
