import { NextPage, NextPageWithLayout } from "next";
import React from "react";
import Image from "next/image";
import { Hero } from "../components/parts/Hero";

import { Layout } from "../components/Layout/Layout";
import { About } from "../components/parts/About";
import { WeAreVirtualLife } from "../components/View/WeAreVirtualLife";

const Home: NextPageWithLayout = () => (
  <div className="flex flex-col gap-32">
    <Hero />
    <About />
    <WeAreVirtualLife />
  </div>
);

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
