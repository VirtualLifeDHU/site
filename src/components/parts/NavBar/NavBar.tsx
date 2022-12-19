import logo from "../../../../public/icon/Logo 1.svg";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { NavBarDrawr } from "../NavBarDrawr";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import { NavBarLinks } from "../../../lib/ProjectData";

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

  const { y } = useWindowScroll();

  const NavBarBigBool = useMemo(() => {
    return y < 100 ? true : false;
  }, [y]);

  return (
    <nav
      className="fixed top-0 left-0 z-50 m-auto w-full py-8 px-4 duration-300  md:p-8 md:px-4"
      style={{
        backgroundColor: `rgba( 255,255,255, ${NavBarBigBool ? 0 : 0.8} )`,
        padding: `${NavBarBigBool ? 40 : 16}px 16px`,
        backdropFilter: `blur(${NavBarBigBool ? 0 : 16}px)`,
        WebkitBackdropFilter: `blur(${NavBarBigBool ? 0 : 16}px)`,
      }}
    >
      <motion.div {...NavBarAnimation} className="m-auto flex max-w-max">
        <div ref={iconRef}>
          <Link href={"/"}>
            <Image
              alt="logo image"
              width={178}
              className="w-[80px] duration-300 md:w-[178px]"
              style={{ width: `${NavBarBigBool ? 178 : 60}px` }}
              src={logo}
            />
          </Link>
        </div>
        <div className="hidden flex-1 flex-row-reverse items-center gap-12 md:flex">
          {NavBarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={"text-xl font-bold not-italic leading-5"}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 flex-row-reverse items-center md:hidden">
          <NavBarDrawr />
        </div>
      </motion.div>
    </nav>
  );
};
