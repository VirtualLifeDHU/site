import { NextPage, NextPageWithLayout } from "next";
import React from "react";
import Image from "next/image";
import { deflate } from "zlib";
import { Hero } from "../components/parts/Hero";

import styles from "./../styles/index.module.css";
import { Layout } from "../components/Layout/Layout";
import { LoadingAnimationA } from "../components/parts/LoadingAnimationA";

const Home: NextPageWithLayout = () => <Hero />;

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
