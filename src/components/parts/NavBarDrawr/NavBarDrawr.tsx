import { useState } from "react";
import { MenuIcon } from "../../icon/MenuIcon";
import Drawer from "react-modern-drawer";
import styles from "./Drawr.module.scss";
import { CloseIcon } from "../../icon/CloseIcon";

type DrawrProps = {
  list?: Array<{ text: string; link: string }>;
};

export const NavBarLinks: DrawrProps["list"] = [
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

export const NavBarDrawr = (props: DrawrProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const links = props.list ? props.list : NavBarLinks;
  return (
    <>
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
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className={
                "py-2 text-right text-3xl font-bold not-italic leading-6"
              }
            >
              {link.text}
            </a>
          ))}
        </div>
      </Drawer>
    </>
  );
};
