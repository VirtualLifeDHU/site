import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";
import styles from "./Hero.module.scss";

type HeroProps = {
  HeroTitle?: React.ReactNode;
};

export const Hero = (props: HeroProps) => {
  const TitleAnimation: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.5,
    },
    exit: { opacity: 0, x: -0 },
  };

  return (
    <div className="relative h-screen">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute top-0 left-0  h-full w-full "
      >
        <Image
          alt="list"
          width={"1280"}
          height={"720"}
          className="h-full w-full object-cover opacity-20"
          src={"/imgs/VRChat_2560x1440_2022-05-10_18-52-09 12.png"}
        />
      </motion.div>
      <motion.div
        {...TitleAnimation}
        className="absolute top-0 left-0  flex h-full w-full items-center "
      >
        <div className={`${styles.gradetion} `}></div>
      </motion.div>
      <motion.div
        {...TitleAnimation}
        className="absolute top-0 left-0 m-auto flex h-full w-full  flex-col items-center justify-center px-4"
      >
        <div className="w-screen max-w-max">
          <h1 className=" w-full px-2 text-5xl font-bold text-text">
            {props.HeroTitle || (
              <>
                <span className="inline-block">バーチャルを</span>
                <span className="inline-block">
                  <ruby>
                    生活
                    <rt>ライフ</rt>
                  </ruby>
                </span>
                <span className="inline-block">の一部に</span>
              </>
            )}
          </h1>
        </div>
      </motion.div>
    </div>
  );
};
