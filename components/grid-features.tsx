import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "AI-Powered Screening",
      description:
        "Automatically screen candidates based on job requirements, saving time and ensuring no qualified candidate is overlooked.",
      icon: <IconTerminal2 />,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Intuitive design makes it easy for both recruiters and candidates to navigate the hiring process.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Cost-Effective Solution",
      description:
        "Reduce hiring costs significantly with our efficient AI-driven processes and flexible pricing plans.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Performance",
      description: "Experience uninterrupted service with our robust cloud-based infrastructure.",
      icon: <IconCloud />,
    },
    {
      title: "Customizable Workflows",
      description: "Tailor the recruitment process to fit your organization's unique needs and requirements.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Support",
      description:
        "Access round-the-clock assistance from our dedicated support team and AI-powered chatbot.",
      icon: <IconHelp />,
    },
    {
      title: "Continuous Improvement",
      description:
        "Our AI models are constantly learning and improving to provide you with the best recruitment experience.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Comprehensive Solution",
      description: "From initial screening to final hiring decisions, Bhartee AI covers all aspects of your recruitment needs.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};