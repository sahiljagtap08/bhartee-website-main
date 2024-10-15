"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconDots, IconPlus } from "@tabler/icons-react";
import { Switch } from "../switch";

export const SkeletonThree = () => {
  return (
    <div className="h-full w-full sm:w-[80%] mx-auto bg-white dark:bg-neutral-800  shadow-2xl dark:shadow-white/40 mt-10 group rounded-md">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-[11]" />

      <div className="flex flex-1 w-full h-full flex-col space-y-2 ">
        <div className="flex justify-between border-b dark:border-neutral-700 pb-2 p-4">
          <p className="text-muted text-sm font-bold dark:text-muted-dark">
            Your Current Openings
          </p>
          <p className="shadow-derek text-muted dark:text-muted-dark text-sm px-2 py-1 rounded-md flex-shrink-0 flex space-x-1 items-center dark:bg-neutral-700">
            <IconPlus className="h-4 w-4 text-muted dark:text-muted-dark" />{" "}
            <span>Add</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Row title="SWE I" interviewCount={15} />
          <Row title="Product Manager" interviewCount={32} active />
          <Row title="SWE Intern" interviewCount={8} />
          <Row title="Researcher" interviewCount={25} active />
          <Row title="CEO" interviewCount={10} active />
        </div>
      </div>
    </div>
  );
};

export const Row = ({
  title,
  interviewCount,
  active = false,
}: {
  title: string;
  interviewCount: number;
  active?: boolean;
}) => {
  const [checked, setChecked] = useState(active);

  const getStatus = () => {
    if (checked) {
      return `${interviewCount} Interviews`;
    } else {
      return "Interviews Paused";
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <p className="text-muted dark:text-muted-dark text-xs shadow-aceternity dark:bg-neutral-700 px-1 py-0.5 rounded-md">
          {title}
        </p>
        <p className="text-muted dark:text-muted-dark text-xs">{getStatus()}</p>
      </div>
      <div className="flex items-center space-x-1">
        <Switch checked={checked} setChecked={setChecked} />
        <IconDots className="h-4 w-4 text-muted dark:text-muted-dark" />
      </div>
    </div>
  );
};