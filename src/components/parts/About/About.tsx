import style from "./About.module.scss";
import { Heading } from "../Heading";
import { useEffect, useRef } from "react";
import { BoxAnimation } from "../../features/BoxAnimation";
import { gsapWappar } from "../../../lib/gsap";
import styles from "./About.module.scss";
import { ScroleFollowImage } from "../../features/ScroleFollowImage";

export const About = () => {
  const img = "/imgs/fff.png";

  const comp = useRef<HTMLDivElement>(null); // create a ref for the root level element (for scoping)asdflkjas;ldfkjasdlfk
  const AnimatinBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsapWappar.to(AnimatinBoxRef.current, {
      y: 0,
      opacity: 1,
      ease: "Power2.easeOut",
      scrollTrigger: {
        trigger: AnimatinBoxRef.current,
        start: "top center+=20%",
        markers: false,
      },
    });
    gsapWappar
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.figure}`,
          start: "top 80p%",
          end: `+=${window.innerHeight / 2}`,
          scrub: 1,
        },
      })
      .fromTo(
        `.${styles.figure}`,
        {
          y: -20,
        },
        {
          y: 30,
          ease: "none",
          duration: 1,
        }
      );
  }, [comp]);

  return (
    <BoxAnimation>
      <div className="m-auto flex max-w-max flex-col gap-2">
        <Heading
          level={1}
          className="inline-flex flex-col gap-4 md:flex-row md:items-center"
        >
          <span>ABOUT</span>
          <span className="hidden md:block">
            <hr className="w-28 border-gray-800 px-4" />
          </span>
          <span className="text-sm">私達について</span>
        </Heading>
        <div className="ml-auto">
          <div
            className="rect flex flex-col items-center gap-4 p-2 md:flex-row"
            ref={AnimatinBoxRef}
            style={{
              transform: "translateY(50px)",
              opacity: 0,
            }}
          >
            <ScroleFollowImage
              img={{
                src: img,
                alt: "about image",
                width: 600,
                height: 400,
              }}
            />
            <div className="ml-auto">
              <p className="inline-flex flex-col items-end text-6xl font-bold md:text-8xl">
                <span>LIFE</span>
                <span className={style.with}>WITH</span>
                <span>VIRTUAL</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BoxAnimation>
  );
};
