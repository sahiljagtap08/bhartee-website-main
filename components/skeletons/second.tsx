"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState, useMemo } from "react";

export const SkeletonTwo = () => {
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handleAnimation = async () => {
    if (animating) return;

    setAnimating(true);
    await animate(
      ".message",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        delay: stagger(0.5),
      }
    );
    setAnimating(false);
  };

  return (
    <div className="relative h-full w-full mt-4">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
          <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6" />
          <div
            onMouseEnter={handleAnimation}
            ref={scope}
            className="content mt-4 w-[90%] mx-auto"
          >
            <AIMessage>
              Hello, Thanks for joining the interview for Software Engineer position. Let&apos;s begin with the interview. Can you introduce yourself and tell us about your experience?
            </AIMessage>
            <UserMessage>
              Hi, my name is John Doe. I have 5 years of experience working as a software engineer at XYZ company. I have experience working with various technologies such as JavaScript, React, and Node.js. I have also worked on several projects that involved building web applications and APIs.
            </UserMessage>
            <AIMessage>
              That&apos;s great to hear. Can you tell us about a project you worked on that you are particularly proud of?
            </AIMessage>
            <UserMessage>
              Sure! One project that I am particularly proud of is a web application that I built for a client. The client needed a platform where users could sign up, create profiles, and connect with other users. I built the application using React and Node.js, and it was a great success.
            </UserMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};

const AIMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
