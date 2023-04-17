import { NextPageWithLayout } from "next";
import React from "react";
import { Hero } from "../components/parts/Hero";

import { Layout } from "../components/Layout/Layout";
import { WeAreVirtualLife } from "../components/View/WeAreVirtualLife";
import Head from "next/head";
import { Join } from "../components/parts/Join";
import { WeWantToDo } from "../components/View/WeWantToDo";

const Home: NextPageWithLayout = () => (
  <div className="flex flex-col gap-32">
    <Head>
      <title>VirtualLife</title>
    </Head>
    <Hero />
    {/* <About /> */}
    <WeAreVirtualLife />
    {/* <Activity /> */}
    <WeWantToDo />
    <Join />
  </div>
);

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
