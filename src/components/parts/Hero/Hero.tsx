import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsapWappar } from "../../../lib/gsap";
import styles from "./Hero.module.scss";

type HeroProps = {
  HeroTitle?: React.ReactNode;
};

export const Hero = (props: HeroProps) => {
  const TextDivRef = useRef<HTMLDivElement>(null);
  const ImageimgRef = useRef<HTMLImageElement>(null);
  const HeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsapWappar
      .timeline({
        repeat: 0,
        delay: 0.2,
      })
      .to(".gsap-initnal-animation", {
        y: 0,
        duration: 0.4,
        opacity: 1,
      })
      .to(`.hero-text-animation span`, {
        y: 0,
        opacity: 1,
        stagger: 0.1, // 0.02秒ごとに出現
        ease: "Power3.easeOut",
      });
  }, [TextDivRef, HeadingRef]);

  return (
    <div ref={TextDivRef} className="relative h-screen">
      <figure className="absolute top-0 left-0  h-full w-full overflow-hidden ">
        <Image
          ref={ImageimgRef}
          alt="list"
          width={"1280"}
          height={"720"}
          className="h-full max-h-full w-full max-w-full scale-110 overflow-hidden object-cover opacity-20"
          src={"/imgs/VRChat_2560x1440_2022-05-10_18-52-09 12.png"}
        />
      </figure>
      <div
        className={` gsap-initnal-animation absolute top-0 left-0 flex h-full w-full items-center `}
        style={{ transform: "translateY(30px)", opacity: 0 }}
      >
        <div
          className={`${styles.gradetion} gsap-gradation-animation`}
          style={{
            background:
              "linear-gradient(270deg, #98e78c 0%, #00a3ff 50%, #ff008a 100%)",
          }}
        ></div>
      </div>
      <div className="absolute top-0 left-0 m-auto flex h-full w-full  flex-col items-center justify-center px-4">
        <div className={`  w-screen max-w-max `}>
          <h1
            ref={HeadingRef}
            className={` hero-text-animation w-full px-2 text-5xl font-bold text-black xl:text-6xl `}
          >
            {props.HeroTitle || (
              <>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  バー
                </span>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  チャ
                </span>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  ル
                </span>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  を
                </span>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  <ruby>
                    人生
                    <rt>ライフ</rt>
                  </ruby>
                </span>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  の
                </span>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  一部
                </span>
                <span
                  className={` inline-block  ${styles["hero-text-animation"]}`}
                >
                  に
                </span>
              </>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};
