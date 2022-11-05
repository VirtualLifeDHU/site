import styles from "./NavBar.module.scss";
import logo from "../../../../public/icon/Logo 1.svg";
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
  return (
    <nav className="absolute top-0 left-0 z-50 flex h-[210px] w-full p-12">
      <Image alt="logo image" width={178} height={129} src={logo} />
      <div className="flex flex-1 flex-row-reverse items-center gap-12">
        {NavBarLinks.map((link, index) => (
          <a key={index} href={link.link}>
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};
