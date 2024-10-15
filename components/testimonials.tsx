import { useState, useMemo } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { InViewDiv } from "./in-view-div";
import { TestimonialColumnContainer } from "./testimonial-column-container";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Transforming Recruitment Across The World</Heading>
      <Subheading className="text-center max-w-lg mx-auto">
        Bhartee AI is revolutionizing hiring processes for companies of all sizes. 
        See what our clients have to say about their experience.
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  quote: string;
}

const testimonials = [
  {
    quote: "Bhartee AI has revolutionized our hiring process. The AI-driven interviews save us countless hours and consistently identify top-tier candidates.",
  },
  {
    quote: "As a startup founder, Bhartee AI has been a game-changer. It&apos;s like having an entire HR department at your fingertips, but more efficient and cost-effective.",
  },
  {
    quote: "The bias reduction features in Bhartee AI have helped us build a more diverse and inclusive workforce. It&apos;s not just a tool; it&apos;s a partner in creating a better workplace.",
  },
  {
    quote: "Bhartee AI&apos;s ability to conduct initial interviews and provide insightful analytics has streamlined our recruitment process significantly. It&apos;s an indispensable tool for modern HR.",
  },
  {
    quote: "The customized job matching feature of Bhartee AI is exceptional. It has dramatically improved the quality of candidates we interview, saving time and resources.",
  },
  {
    quote: "Integrating Bhartee AI with our existing ATS was seamless. The AI-powered insights have given us a competitive edge in attracting and retaining top talent.",
  },
  {
    quote: "Bhartee AI&apos;s ability to conduct multilingual interviews has been crucial for our global hiring needs. It&apos;s expanded our talent pool significantly.",
  },
  {
    quote: "The predictive hiring models in Bhartee AI have improved our retention rates dramatically. It&apos;s not just filling positions; it&apos;s finding the right fit for long-term success.",
  },
];

function Testimonial({
  quote,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> &
  Testimonial) {
  
  const animationDelay = useMemo(() => {
    const possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-transparent p-8 opacity-0 shadow-derek dark:bg-neutral-900",
        className
      )}
      style={{
        animationDelay,
      }}
      {...props}
    >
      <div className="flex flex-col items-start">
        <p className="text-base text-muted dark:text-muted-dark">
          &quot;{quote}&quot;
        </p>
      </div>
    </figure>
  );
}

function TestimonialColumn({
  testimonials,
  className,
  containerClassName,
  shift = 0,
}: {
  testimonials: Testimonial[];
  className?: string;
  containerClassName?: (reviewIndex: number) => string;
  shift?: number;
}) {
  return (
    <TestimonialColumnContainer className={cn(className)} shift={shift}>
      {testimonials
        .concat(testimonials)
        .map((testimonial, testimonialIndex) => (
          <Testimonial
            quote={testimonial.quote}
            key={testimonialIndex}
            className={containerClassName?.(
              testimonialIndex % testimonials.length
            )}
          />
        ))}
    </TestimonialColumnContainer>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function TestimonialGrid() {
  const columns = splitArray(testimonials, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <InViewDiv className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn
        testimonials={[...column1, ...column3.flat(), ...column2]}
        containerClassName={(tIndex) =>
          cn(
            tIndex >= column1.length + column3[0].length && "md:hidden",
            tIndex >= column1.length && "lg:hidden"
          )
        }
        shift={10}
      />
      <TestimonialColumn
        testimonials={[...column2, ...column3[1]]}
        className="hidden md:block"
        containerClassName={(tIndex) =>
          tIndex >= column2.length ? "lg:hidden" : ""
        }
        shift={15}
      />
      <TestimonialColumn
        testimonials={column3.flat()}
        className="hidden lg:block"
        shift={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black" />
    </InViewDiv>
  );
}
