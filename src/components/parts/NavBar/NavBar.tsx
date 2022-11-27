import logo from "../../../../public/icon/Logo 1.svg";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useMemo, useRef } from "react";
import { useOffsetTop } from "../../../hooks/useOffsetTop";
import { NavBarDrawr } from "../NavBarDrawr";
import { useWindowScroll } from "react-use";

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
    size: { from: 178, end: 80 },
  });
  const { size: BackgroundTransparency } = useOffsetTop({
    ref: iconRef,
    size: { from: 0, end: 0.8 },
  });

  const { size: NavBarPadding } = useOffsetTop({
    ref: iconRef,
    size: { from: 40, end: 12 },
  });
  const { size: NavBarBlur } = useOffsetTop({
    ref: iconRef,
    size: { from: 0, end: 16 },
  });
  const { y } = useWindowScroll();

  const NavBarBigBool = useMemo(() => {
    if (y < 100) {
      return true;
    } else {
      return false;
    }
  }, [y]);

  return (
    <nav
      className="fixed top-0 left-0 z-50 m-auto w-full py-8 px-8 duration-300  md:p-8"
      style={{
        backgroundColor: `rgba( 255,255,255, ${NavBarBigBool ? 0 : 0.8} )`,
        padding: `${NavBarBigBool ? 40 : 16}px`,
        backdropFilter: `blur(${NavBarBigBool ? 0 : 16}px)`,
        WebkitBackdropFilter: `blur(${NavBarBigBool ? 0 : 16}px)`,
      }}
    >
      <motion.div {...NavBarAnimation} className="m-auto flex max-w-max">
        <div ref={iconRef}>
          <Image
            alt="logo image"
            width={178}
            className="w-[80px] duration-300 md:w-[178px]"
            style={{ width: `${NavBarBigBool ? 178 : 60}px` }}
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
              {NavBarBigBool.toString()}
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
