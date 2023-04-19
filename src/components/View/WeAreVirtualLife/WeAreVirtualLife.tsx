import { ProjextImages } from "../../../lib/ProjectData";
import { BoxAnimation } from "../../features/BoxAnimation";
import { ScroleFollowImage } from "../../features/ScroleFollowImage";
import { Body } from "../../parts/Body";
import { Heading } from "../../parts/Heading";
import styles from "./WeAreVirtualLife.module.scss";

export const WeAreVirtualLife = () => {
  const img = ProjextImages.WeAreVirtualLifeImage;
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
        <div className="flex h-full items-center md:absolute   md:top-0 md:left-0">
          <div>
            <Heading level={1} className={"bg-white/90 backdrop-blur"}>
              <span>We are </span>
              <span className={styles.gradesionColor}>Virtual Life</span>
            </Heading>
            <Body className="md:max-w-[calc(100%-600px)]">
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
