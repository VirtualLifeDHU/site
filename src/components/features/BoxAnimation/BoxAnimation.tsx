import { ReactNode, useEffect, useRef } from "react";
import { gsapWappar } from "../../../lib/gsap";

type BoxAnimationProps = {
  children: ReactNode;
};

export const BoxAnimation = (props: BoxAnimationProps) => {
  const WapperDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsapWappar.context(() => {
      gsapWappar.to(WapperDivRef.current, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: WapperDivRef.current,
          start: "top center+=20%",
          markers: false,
        },
      });
    });
  }, [WapperDivRef]);

  return (
    <div
      ref={WapperDivRef}
      className="gsap-box-animation"
      style={{
        transform: "translateY(30px)",
        opacity: 0,
      }}
    >
      <div className={"gsap-box-animation-moveing"}>{props.children}</div>
    </div>
  );
};
