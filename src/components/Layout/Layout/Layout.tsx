import React from "react";
import { NavBar } from "../../parts/NavBar";
export type LayoutProps = {
  children: React.ReactNode;
};
export const Layout = (props: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
};
