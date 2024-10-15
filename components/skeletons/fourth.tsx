import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Globe } from "../globe";

export const SkeletonFour = () => {
  return (
    <div className="h-full flex flex-col items-center relative bg-white dark:bg-black mt-10">
      <InfiniteMovingCards speed="fast" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="slow" direction="right">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="normal" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>

      <Globe className="absolute -right-2 md:-right-40 -bottom-40" />
    </div>
  );
};

const MovingGrid = () => {
  return (
    <div className="flex space-x-4 flex-shrink-0 mb-4 relative z-40">
      <ATSCompanyCard name="Workday" />
      <ATSCompanyCard name="Lever" />
      <ATSCompanyCard name="Greenhouse" />
      <ATSCompanyCard name="Taleo" />
      <ATSCompanyCard name="iCIMS" />
      <ATSCompanyCard name="BambooHR" />
      <ATSCompanyCard name="Jobvite" />
      <ATSCompanyCard name="SmartRecruiters" />
    </div>
  );
};

interface ATSCompanyCardProps {
  name: string;
}

const ATSCompanyCard = ({ name }: ATSCompanyCardProps) => {
  return (
    <span
      className={cn(
        "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
      )}
    >
      <CompanyLogo />
      <span>{name}</span>
    </span>
  );
};

const CompanyLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <path
        d="M3 21H21M3 18H21M5.82333 3.00037C5.82333 3.00037 8.12851 7.50037 12.0283 7.50037C15.9282 7.50037 18.2333 3 18.2333 3"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11L8 14L11 11"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11L16 14L19 11"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SkeletonFour;