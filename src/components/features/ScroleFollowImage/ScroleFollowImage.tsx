import classNames from "classnames";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsapWappar } from "../../../lib/gsap";
import styles from "./ScroleFollowImage.module.scss";

type ScroleFollowImageProps = {
  img: React.ComponentProps<typeof Image>;
  className?: string;
};

export const ScroleFollowImage = (props: ScroleFollowImageProps) => {
  const { className: ImageClassNmae, alt: ImageAlt, ...ImageProps } = props.img;
  const FigureRef = useRef<HTMLElement>(null);
  useEffect(() => {
    gsapWappar
      .timeline({
        scrollTrigger: {
          trigger: FigureRef.current,
          start: "top 90p%",
          end: `+=${window.innerHeight * 0.75}`,
          scrub: 1,
        },
      })
      .fromTo(
        FigureRef.current,
        {
          y: -20,
        },
        {
          y: 30,
          ease: "none",
          duration: 1,
        }
      );
  }, [FigureRef]);

  return (
    <figure
      className={classNames(styles.figure, props.className)}
      ref={FigureRef}
    >
      <Image
        alt={ImageAlt || "image"}
        className={classNames(styles.image, ImageClassNmae)}
        {...ImageProps}
      />
    </figure>
  );
};
