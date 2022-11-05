import React from "react";
import styles from "./Layout.module.scss";
export type LayoutProps = {
  children: React.ReactNode;
};
export const Layout = (props: LayoutProps) => {
  return <div className="min-h-screen">{props.children}</div>;
};
