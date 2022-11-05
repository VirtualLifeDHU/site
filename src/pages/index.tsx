import { NextPage, NextPageWithLayout } from "next";
import React from "react";
import Image from "next/image";
import { deflate } from "zlib";
import { Hero } from "../components/parts/Hero";
import { motion } from "framer-motion";

import styles from "./../styles/index.module.css";
import { Layout } from "../components/Layout/Layout";

const Home: NextPageWithLayout = () => <Hero />;
Home.getLayout = (page) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.3,
      delay: 0.2,
    }}
    exit={{ opacity: 0, y: 100 }}
  >
    <Layout>{page}</Layout>{" "}
  </motion.div>
);

export default Home;
