import React, { useLayoutEffect, useRef } from "react";
import styles from "./Heading.module.scss";
import { motion } from "framer-motion";
import { gsap } from "gsap";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading = (props: HeadingProps) => {
  const comp = useRef<HTMLDivElement>(null); // create a ref for the root level element (for scoping)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".word", {
          y: 56,
          opacity: 0,
          duration: 0.75,
          ease: "power4.out",
        })
        .to(".word", {
          y: 0,
          opacity: 1,
        })
        .to(".rect", { x: "-120%" });
    }, comp);

    return () => ctx.revert();
  });

  return (
    <div ref={comp}>
      <span
        style={{ opacity: 0, transform: "translate( 0 , 100px)" }}
        className="word  relative inline-block overflow-hidden text-6xl font-black leading-none"
      >
        <span className="rect absolute  left-0 h-full w-full bg-black"></span>
        <span className="label">INTERACTION</span>
      </span>

      <h1
        className={`text-8xl font-bold not-italic text-text ${props.className} gsap-animate`}
      >
        {props.children}
      </h1>
    </div>
  );
};
