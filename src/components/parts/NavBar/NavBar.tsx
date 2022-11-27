import styles from "./NavBar.module.scss";
import logo from "../../../../public/icon/Logo 1.svg";
import { HTMLMotionProps, motion, useScroll } from "framer-motion";
import Image from "next/image";
import { SVGProps, useEffect, useMemo, useRef, useState } from "react";
import { MenuIcon } from "../../icon/MenuIcon";
import { CloseIcon } from "../../icon/CloseIcon";
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
const maxIconSize = 178; // 要素の最大サイズ
const minIconSize = 80; // 要素の最小サイズ
const NavBarBackgroundTransparency = {
  min: 1,
  max: 0,
};
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
  const { pageOffsetTop, viewportTop } = useOffsetTop(iconRef);

  // 要素の位置をもとにサイズを計算
  const iconSize = useMemo(() => {
    // 位置を取得できなかったときは最大サイズとして表示
    if (pageOffsetTop === undefined || viewportTop === undefined)
      return maxIconSize;

    // 位置に応じてサイズ計算
    const size =
      minIconSize + (viewportTop / pageOffsetTop) * (maxIconSize - minIconSize);

    return size.toFixed(1);
  }, [pageOffsetTop, viewportTop]);

  const BackgroundTransparency = useMemo(() => {
    // 位置を取得できなかったときは最大サイズとして表示
    if (pageOffsetTop === undefined || viewportTop === undefined)
      return maxIconSize;

    // 位置に応じてサイズ計算
    const size =
      NavBarBackgroundTransparency.min +
      (viewportTop / pageOffsetTop) *
        (NavBarBackgroundTransparency.max - NavBarBackgroundTransparency.min);

    return size.toFixed(1);
  }, [pageOffsetTop, viewportTop]);
  const NavBarPadding = useMemo(() => {
    // 位置を取得できなかったときは最大サイズとして表示
    if (pageOffsetTop === undefined || viewportTop === undefined)
      return maxIconSize;

    // 位置に応じてサイズ計算
    const size =
      NavBarBackgroundTransparency.max +
      (viewportTop / pageOffsetTop) *
        (NavBarBackgroundTransparency.min - NavBarBackgroundTransparency.max);

    return size.toFixed(1);
  }, [pageOffsetTop, viewportTop]);
  return (
    <nav
      className="fixed top-0 left-0 z-50 m-auto w-full py-8 px-8  md:p-8"
      style={{
        backgroundColor: `rgba( 255,255,255,  ${BackgroundTransparency} )`,
        padding: `${16 + parseFloat(NavBarPadding.toString()) * 32}px`,
      }}
    >
      <motion.div {...NavBarAnimation} className="m-auto flex max-w-max">
        <div ref={iconRef}>
          <Image
            alt="logo image"
            width={178}
            className="w-[80px] md:w-[178px]"
            style={{ width: `${iconSize}px` }}
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
