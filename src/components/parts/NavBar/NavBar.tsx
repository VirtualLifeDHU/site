import styles from "./NavBar.module.scss";
import logo from "../../../../public/icon/Logo 1.svg";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <nav className="absolute top-0 left-0 z-50 m-auto  h-[210px] w-full  p-12">
      <motion.div {...NavBarAnimation} className="m-auto flex max-w-max">
        <Image alt="logo image" width={178} height={129} src={logo} />
        <div className="flex flex-1 flex-row-reverse items-center gap-12">
          {NavBarLinks.map((link, index) => (
            <a key={index} href={link.link}>
              {link.text}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};
