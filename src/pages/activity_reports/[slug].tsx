import { NextPageWithLayout } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";
import { getAllActivityPosts, getPostBySlug } from "../../lib/getActivity";
import markdownToHtml from "../../lib/MarkdownToHtml";
import { PostType } from "../../types/Posts";
import styles from "../styles/Home.module.css";

type ActivityReportProps = {
  post: PostType;
};
const Slug: NextPageWithLayout<ActivityReportProps> = (props) => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="pt-52">
        <Image
          src={props.post.coverImage}
          width={752}
          height={423}
          alt="cover image"
        />
      </div>
      <div className="prose mx-auto max-w-2xl">
        <h1>{props.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
      </div>
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
