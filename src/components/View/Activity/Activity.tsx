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
      Array.apply(null, Array(ActivityList.length)).map((value, key) => {
        ScrollTrigger.create({
          trigger: `.activity-item-${key}`,
          pin: `.activity-item-${key} .pin-section `,
          markers: false,
          start: "top top+=76px",
          end: value == 0 ? "bottom top" : "bottom top-=50%",
        });
      });
    });
  }, []);

  return (
    <div className="">
      <div>
        <SectionHeading sub="活動" main="Activity" />
        <div>
          {ActivityList.map((value, key) => (
            <div
              className={classNames(`activity-item-${key}`, styles.actibtyItem)}
              key={key}
            >
              <div className={classNames("pin-section", styles.pinSection)}>
                <div className={styles.imageWapper}>
                  <Image
                    alt={value.img.alt}
                    width={1800}
                    height={1200}
                    src={value.img.src}
                    className={classNames("image", styles.pinSectionImage)}
                  />
                </div>
                <div className={classNames(styles.headginWapper)}>
                  <Heading
                    level={2}
                    className={classNames("heading ", styles.heading)}
                  >
                    {value.text}
                  </Heading>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
