import styles from "./Hero.module.scss";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
  return (
    <div className="h-screen ">
      <div className="flex flex-col justify-center h-full items-center">
        <h1 className="text-text font-bold text-5xl w-full">
          バーチャルを
          <ruby>
            生活
            <rt>ライフ</rt>
          </ruby>
          の一部に
        </h1>
      </div>
    </div>
  );
};
