import React, { useLayoutEffect, useRef } from "react";
import styles from "./Heading.module.scss";
import { motion } from "framer-motion";
import gsap from "gsap";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading = (props: HeadingProps) => {
  const HeadingRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.from;
    }, HeadingRef); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <div ref={HeadingRef}>
      <h1
        className={`text-8xl font-bold not-italic text-text ${props.className} gsap-animate`}
      >
        <span className="word relative inline-block overflow-hidden text-6xl font-black leading-none">
          <span className="rect absolute top-0 left-0 h-full w-full bg-black"></span>
          <span className="label">INTERACTION</span>
        </span>

        {props.children}
      </h1>
    </div>
  );
};
