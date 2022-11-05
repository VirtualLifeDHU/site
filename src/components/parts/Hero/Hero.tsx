import styles from "./Hero.module.scss";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
  return (
    <div className="h-full bg-blue-400">
      <h1 className="text-red-400">
        バーチャルを
        <ruby>
          生活
          <rt>ライフ</rt>
        </ruby>
        の一部に
      </h1>
    </div>
  );
};
