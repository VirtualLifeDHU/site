import React, { useLayoutEffect, useRef } from "react";
import styles from "./Heading.module.scss";
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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".rect",
          },
        })
        .from(".word", {
          y: 50,
          opacity: 0,
        })
        .to(".word", {
          y: 0,
          opacity: 1,
          ease: "Power2.easeOut",
        })
        .to(".rect", { x: "-120%" });
    }, comp);

    return () => ctx.revert();
  });

  return (
    <div ref={comp}>
      <h1
        className={
          "word  relative  inline-block  overflow-hidden  text-8xl  font-bold not-italic leading-none text-text " +
          props.className
        }
      >
        <span className="rect absolute  left-0 h-full w-full bg-text"></span>
        <span className="label contents"> {props.children}</span>
      </h1>

      <h1
        className={`text-8xl font-bold not-italic text-text ${props.className} gsap-animate`}
      ></h1>
    </div>
  );
};
