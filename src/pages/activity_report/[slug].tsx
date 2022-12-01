import { NextPageWithLayout } from "next";
import Image from "next/image";
import { Layout } from "../../components/Layout/Layout";
import { getAllActivityPosts, getPostBySlug } from "../../lib/getActivity";
import markdownToHtml from "../../lib/MarkdownToHtml";
import { PostType } from "../../types/Posts";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

type ActivityReportProps = {
  post: PostType;
};
const Slug: NextPageWithLayout<ActivityReportProps> = (props) => {
  return (
    <div className=" w-dull prose m-auto mt-[200px] max-w-[700px]">
      <motion.div
        layoutId={`card-${props.post.slug}`}
        className="relative aspect-square w-full max-w-max rounded-lg bg-white	"
      >
        {/* タイトル */}
        <div className=" absolute top-0 left-0 p-4">
          <motion.h1
            layoutId={`title-${props.post.slug}`}
            className=" text-3xl font-bold text-white duration-200	"
            style={{}}
          >
            {props.post.title}
          </motion.h1>
        </div>
        {/* 画像 */}
        <motion.div layoutId={`image-${props.post.slug}`}>
          <Image
            className="h-full w-full rounded-lg object-cover"
            width={400}
            height={300}
            src={props.post.coverImage}
            alt={"image"}
          />
        </motion.div>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
      </motion.div>
    </div>
  );
};

Slug.getLayout = (page) => <Layout>{page}</Layout>;
export default Slug;
type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllActivityPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}