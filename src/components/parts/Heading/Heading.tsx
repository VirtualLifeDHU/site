import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading = (props: HeadingProps) => {
  const comp = useRef<HTMLDivElement>(null); // create a ref for the root level element (for scoping)

  return (
    <div ref={comp}>
      <h1
        className={
          "word  relative  inline-block  overflow-hidden text-7xl font-bold  not-italic leading-none text-text md:text-8xl " +
          props.className
        }
      >
        <span className="label contents"> {props.children}</span>
      </h1>
      <h1
        className={`text-8xl font-bold not-italic text-text ${props.className} gsap-animate`}
      ></h1>
    </div>
  );
};
