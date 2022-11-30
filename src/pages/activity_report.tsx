import { NextPage, NextPageWithLayout } from "next";
import React from "react";
import Image from "next/image";
import { Hero } from "../components/parts/Hero";

import { Layout } from "../components/Layout/Layout";
import { About } from "../components/parts/About";

const Home: NextPageWithLayout = () => (
  <div className="flex flex-col gap-32">
    <Hero HeroTitle={<span className="text-8xl">Activity Report</span>} />
  </div>
);

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
