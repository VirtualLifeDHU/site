import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsapWappar } from "../../../lib/gsap";
import styles from "./Hero.module.scss";

type HeroProps = {
  HeroTitle?: React.ReactNode;
};

export const Hero = (props: HeroProps) => {
  const TextDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsapWappar.context(() => {
      gsapWappar.to(".gsap-initnal-animation", {
        y: 0,
        opacity: 1,
        duration: 0.6,
      });
      gsapWappar.fromTo(
        `${styles.gradetion}`,
        {
          background:
            "linear-gradient(270deg, #98e78c 0%, #00a3ff 50%, #ff008a 100%);",
        },
        {
          yoyo: true,
          background:
            "linear-gradient(270deg, #98e78c 30%, #00a3ff 100%, #ff008a 100%);",
        }
      );
    }, TextDivRef);
  }, [TextDivRef]);

  return (
    <div ref={TextDivRef} className="relative h-screen">
      <div className="absolute top-0 left-0  h-full w-full ">
        <Image
          alt="list"
          width={"1280"}
          height={"720"}
          className="h-full w-full object-cover opacity-20"
          src={"/imgs/VRChat_2560x1440_2022-05-10_18-52-09 12.png"}
        />
      </div>
      <div
        className={` gsap-initnal-animation absolute top-0 left-0 flex h-full w-full items-center `}
        style={{ transform: "translateY(70px)", opacity: 0 }}
      >
        <div className={`${styles.gradetion} gsap-gradation-animation`}></div>
      </div>
      <div className="absolute top-0 left-0 m-auto flex h-full w-full  flex-col items-center justify-center px-4">
        <div
          className={` gsap-initnal-animation  w-screen max-w-max `}
          style={{
            transform: "translateY(70px)",
            opacity: 0,
          }}
        >
          <h1 className=" w-full px-2 text-5xl font-bold text-text">
            {props.HeroTitle || (
              <>
                <span className="inline-block">バーチャルを</span>
                <span className="inline-block">
                  <ruby>
                    人生
                    <rt>ライフ</rt>
                  </ruby>
                </span>
                <span className="inline-block">の一部に</span>
              </>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};
