import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./BoxAnimation.module.scss";

type BoxAnimationProps = {
  children: ReactNode;
};

export const BoxAnimation = (props: BoxAnimationProps) => {
  const comp = useRef<HTMLDivElement>(null); // create a ref for the root level element (for scoping)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          delay: 0.3,
          scrollTrigger: {
            trigger: ".moveing",
          },
        })
        .from(".moveing", {
          y: 50,
          opacity: 0,
        })
        .to(".moveing", {
          y: 0,
          opacity: 1,
          ease: "Power3.easeOut",
        });
    }, comp);

    return () => ctx.revert();
  });
  return (
    <div ref={comp} className="">
      <div className="moveing">{props.children}</div>
    </div>
  );
};
