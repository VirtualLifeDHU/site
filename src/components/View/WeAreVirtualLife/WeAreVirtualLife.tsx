import { BoxAnimation } from "../../features/BoxAnimation";
import { ScroleFollowImage } from "../../features/ScroleFollowImage";
import { Body } from "../../parts/Body";
import { Heading } from "../../parts/Heading";
import styles from "./WeAreVirtualLife.module.scss";

export const WeAreVirtualLife = () => {
  const img = "/imgs/fff.png";
  return (
    <BoxAnimation>
      <div className="relative m-auto ml-auto  max-w-max">
        <div>
          <ScroleFollowImage
            className="ml-[auto] max-w-xl"
            img={{
              alt: "image",
              src: img,
              width: 1200,
              height: 800,
            }}
          />
        </div>
        <div className="absolute top-0 left-0 flex h-full items-center">
          <div>
            <Heading level={1} className={"bg-white/90 backdrop-blur"}>
              <span>We are </span>
              <span className={styles.gradesionColor}>Virtual Life</span>
            </Heading>
            <Body className="max-w-[calc(100%-600px)]">
              DHU公認サークル『バーチャルライフ』
              <br />
              <br />
              バーチャルライフはゆるく楽しい創作をしていく事を理念とし、VRに関する創作活動等を行い、人々をバーチャルにつなげていく活動をしています。
            </Body>
          </div>
        </div>
      </div>
    </BoxAnimation>
  );
};
