import { Heading } from "../Heading";
import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  main: string;
  sub: string;
};

export const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <>
      <Heading
        level={1}
        className={"inline-flex flex-col gap-4 md:flex-row md:items-center"}
      >
        <span className={styles.heading}>{props.main}</span>
        <span className="hidden md:block">
          <hr className="w-28 border-gray-800 px-4" />
        </span>
        <span className="text-sm">{props.sub}</span>
      </Heading>
    </>
  );
};
