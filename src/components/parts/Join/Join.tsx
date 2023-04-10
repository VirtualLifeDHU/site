import { Heading } from "../Heading";
import styles from "./Join.module.scss";

export const Join = () => {
  return (
    <div className="relative m-auto ml-auto  max-w-max">
      <Heading level={1} className={"bg-white/90 font-bold backdrop-blur"}>
        <span className={styles.gradesionColor}>Join </span>
        <span>Virtual Life</span>
      </Heading>
      <a
        href="https://jooinvl.mochi33.com"
        className={`w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700`}
      >
        JOIN
      </a>
    </div>
  );
};
