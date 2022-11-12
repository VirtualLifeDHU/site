import Image from "next/image";
import style from "./About.module.scss";
import { Heading } from "../Heading";

export const About = () => {
  return (
    <div className="m-auto max-w-max">
      <Heading level={1} className="inline-flex items-center gap-4">
        <span>ABOUT</span>
        <span>
          <hr className="w-28 border-gray-800 px-4" />
        </span>
        <span className="text-sm">私達について</span>
      </Heading>
      <div className="flex items-center">
        <Image src={"/imgs/fff.png"} alt="alt" width={600} height={400} />
        <div>
          <p className="inline-flex flex-col items-end text-8xl font-bold">
            <span>LIFE</span>
            <span className={style.with}>WITH</span>
            <span>VIRTUAL</span>
          </p>
        </div>
      </div>
    </div>
  );
};
