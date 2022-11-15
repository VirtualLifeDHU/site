import Image from "next/image";
import style from "./About.module.scss";
import { Heading } from "../Heading";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { BoxAnimation } from "../../features/BoxAnimation";

export const About = () => {
  const img = "/imgs/fff.png";

  const comp = useRef<HTMLDivElement>(null); // create a ref for the root level element (for scoping)asdflkjas;ldfkjasdlfk

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".rect",
          },
        })
        .from(".rect", {
          y: 50,
          opacity: 0,
        })
        .to(".word", {
          y: 0,
          opacity: 1,
          ease: "Power2.easeOut",
        });
    }, comp);

    return () => ctx.revert();
  });

  return (
    <BoxAnimation>
      <div className="m-auto flex max-w-max flex-col gap-2">
        <Heading level={1} className="inline-flex items-center gap-4">
          <span>ABOUT</span>
          <span>
            <hr className="w-28 border-gray-800 px-4" />
          </span>
          <span className="text-sm">私達について</span>
        </Heading>
        <div>
          <div className="rect flex items-center gap-4">
            <Image src={img} alt="alt" width={600} height={400} />
            <div>
              <p className="inline-flex flex-col items-end text-8xl font-bold">
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
