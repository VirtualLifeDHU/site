import styles from "./NavBar.module.scss";
import logo from "../../../../public/icon/Logo 1.svg";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import { SVGProps, useState } from "react";
import Drawer from "react-modern-drawer";
import { MenuIcon } from "../../icon/MenuIcon";
import { CloseIcon } from "../../icon/CloseIcon";

export const NavBar = () => {
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
  const NavBarAnimation: HTMLMotionProps<"nav"> = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
    },
    exit: { opacity: 0, y: 0 },
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="absolute top-0 left-0 z-50 m-auto   w-full py-8 px-8  md:p-12">
      <motion.div {...NavBarAnimation} className="m-auto flex max-w-max">
        <Image
          alt="logo image"
          width={178}
          height={129}
          className="w-[80px] md:w-[178px]"
          src={logo}
        />
        <div className="hidden flex-1 flex-row-reverse items-center gap-12 md:flex">
          {NavBarLinks.map((link, index) => (
            <a key={index} href={link.link}>
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex flex-1 flex-row-reverse items-center md:hidden">
          <button onClick={toggleDrawer}>
            <MenuIcon />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            size={"100vw"}
            className="bla w-full"
          >
            <div className="p-8">
              <button
                onClick={toggleDrawer}
                className="inline-flex w-full flex-1 flex-row-reverse"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col gap-8 px-8 py-4">
              {NavBarLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className={
                    "py-2 text-right text-3xl font-black not-italic leading-6"
                  }
                >
                  {link.text}
                </a>
              ))}
            </div>
          </Drawer>
        </div>
      </motion.div>
    </nav>
  );
};
