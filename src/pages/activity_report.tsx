import { NextPage, NextPageWithLayout } from "next";
import React from "react";
import Image from "next/image";
import { Hero } from "../components/parts/Hero";

import { Layout } from "../components/Layout/Layout";
import { PostType } from "../types/Posts";
import { CardList } from "../components/parts/CardList";
import { SliceInAnimationBox } from "../components/parts/SliceInAnimationBox";
import { getAllActivityPosts } from "../lib/getActivity";
import { BoxAnimation } from "../components/features/BoxAnimation";
import { Heading } from "../components/parts/Heading";

type ActivityReportProps = {
  allPosts: PostType[];
};

const ActivityReport: NextPageWithLayout<ActivityReportProps> = (props) => (
  <div className="pt-52">
    <BoxAnimation>
      <div className="flex flex-col gap-32">
        <CardList Posts={props.allPosts} />
      </div>
    </BoxAnimation>
  </div>
);

ActivityReport.getLayout = (page) => <Layout>{page}</Layout>;

export default ActivityReport;
export const getStaticProps = async () => {
  const allPosts = getAllActivityPosts(["title", "coverImage", "slug", "data"]);

  return {
    props: { allPosts },
  };
};
