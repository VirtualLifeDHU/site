import { NextPage, NextPageWithLayout } from "next";
import React from "react";
import Image from "next/image";
import { Hero } from "../components/parts/Hero";

import { Layout } from "../components/Layout/Layout";
import { getAllActivityPosts } from "../lib/getActivity";
import { PostType } from "../types/Posts";

type ActivityReportProps = {
  allPosts: PostType[];
};

const ActivityReport: NextPageWithLayout<ActivityReportProps> = (props) => (
  <div className="flex flex-col gap-32">
    <Hero HeroTitle={<span className="text-8xl">Activity Report</span>} />
    <pre>{JSON.stringify(props.allPosts, null, 2)}</pre>
  </div>
);

ActivityReport.getLayout = (page) => <Layout>{page}</Layout>;

export default ActivityReport;
export const getStaticProps = async () => {
  const allPosts = getAllActivityPosts([
    "title",
    "coverImage",
    "slug",
    "data",
    "content",
  ]);

  return {
    props: { allPosts },
  };
};
