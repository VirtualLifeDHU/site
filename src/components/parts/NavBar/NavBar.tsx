import logo from "../../../../public/icon/Logo 1.svg";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useOffsetTop } from "../../../hooks/useOffsetTop";
import { NavBarDrawr } from "../NavBarDrawr";

const NavBarLinks: Array<{
  text: string;
  link: string;
}> = [
  {
    text: "ABOUT",
    link: "",
  },
  {
    text: "ACTIVITY",
    link: "",
  },
  {
    text: "SOCIAL",
    link: "",
  },
  {
    text: "CONTACT",
    link: "",
  },
];

export const NavBar = () => {
  const NavBarAnimation: HTMLMotionProps<"nav"> = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
    },
    exit: { opacity: 0, y: 0 },
  };
  const iconRef = useRef(null);
  const { size: IconSize } = useOffsetTop({
    ref: iconRef,
    size: { max: 178, min: 80 },
  });
  const { size: BackgroundTransparency } = useOffsetTop({
    ref: iconRef,
    size: { max: 0, min: 1 },
  });

  const { size: NavBarPadding } = useOffsetTop({
    ref: iconRef,
    size: { max: 82, min: 16 },
  });
  return (
    <nav
      className="fixed top-0 left-0 z-50 m-auto w-full py-8 px-8  md:p-8"
      style={{
        backgroundColor: `rgba( 255,255,255,  ${BackgroundTransparency} )`,
        padding: `${NavBarPadding}px`,
      }}
    >
      <motion.div {...NavBarAnimation} className="m-auto flex max-w-max">
        <div ref={iconRef}>
          <Image
            alt="logo image"
            width={178}
            className="w-[80px] md:w-[178px]"
            style={{ width: `${IconSize}px` }}
            src={logo}
          />
        </div>
        <div className="hidden flex-1 flex-row-reverse items-center gap-12 md:flex">
          {NavBarLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className={"text-xl font-bold not-italic leading-5"}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex flex-1 flex-row-reverse items-center md:hidden">
          <NavBarDrawr />
        </div>
      </motion.div>
    </nav>
  );
};
