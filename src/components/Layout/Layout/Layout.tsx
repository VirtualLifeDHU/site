import React from "react";
import { Footer } from "../../parts/Footer";
import { NavBar } from "../../parts/NavBar";
export type LayoutProps = {
  children: React.ReactNode;
};
export const Layout = (props: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
