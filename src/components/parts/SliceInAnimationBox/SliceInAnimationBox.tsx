import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

type SliceInAnimationBoxProps = {
  children: React.ReactNode;
};

export const SliceInAnimationBox = (props: SliceInAnimationBoxProps) => {
  const animRef = useRef<HTMLDivElement>(null);
  return <div ref={animRef}>{props.children}</div>;
};
