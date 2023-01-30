import classNames from "classnames";
import Image from "next/image";
import { useEffect } from "react";
import { gsapWappar, ScrollTrigger } from "../../../lib/gsap";
import { Heading } from "../../parts/Heading";
import { SectionHeading } from "../../parts/SectionHeading";
import styles from "./Activity.module.scss";

const ActivityList: Array<{
  img: { src: string; alt: string };
  text: JSX.Element;
}> = [
  {
    img: { src: "/imgs/fff.png", alt: "体験会" },
    text: (
      <>
        <span>VR未経験者向けの</span>
        <span className={styles["text-gradation-1"]}>体験会、交流</span>
      </>
    ),
  },
  {
    img: { src: "/imgs/fff.png", alt: "体験会" },
    text: (
      <>
        <span>ツール</span>
        <span className={styles["text-gradation-2"]}>勉強会</span>
      </>
    ),
  },
  {
    img: { src: "/imgs/fff.png", alt: "体験会" },
    text: (
      <>
        <span>大学の</span>
        <span className={styles["text-gradation-3"]}>Vket出展</span>
        <span>の宣伝</span>
      </>
    ),
  },
  {
    img: { src: "/imgs/fff.png", alt: "体験会" },
    text: (
      <>
        <span className={styles["text-gradation-4"]}>外部イベント</span>
        <span>への参加</span>
      </>
    ),
  },
];

export const Activity = () => {
  useEffect(() => {
    gsapWappar.context(() => {
      [0, 1, 2, 3].map((value) => {
        ScrollTrigger.create({
          trigger: ".activity-item-" + value,
          pin: `.activity-item-${value} .heading && .activity-item-${value} .image`,
          markers: false,
          start: "top top",
          end: "bottom top",
        });
      });
    });
  }, []);

  return (
    <div className="max-wmax mx-auto">
      <div>
        <SectionHeading sub="活動" main="Activity" />
        {ActivityList.map((value, key) => (
          <div className={`activity-item-${key}`} key={key}>
            <Image
              alt={value.img.alt}
              width={800}
              height={450}
              src={value.img.src}
              className={"image"}
            />
            <Heading level={2} className={classNames("heading ")}>
              {value.text}
            </Heading>
          </div>
        ))}
      </div>
    </div>
  );
};
