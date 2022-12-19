import { NextPageWithLayout } from "next";
import Image from "next/image";
import { Layout } from "../../components/Layout/Layout";
import { getAllActivityPosts, getPostBySlug } from "../../lib/getActivity";
import markdownToHtml from "../../lib/MarkdownToHtml";
import { PostType } from "../../types/Posts";
import { BoxAnimation } from "../../components/features/BoxAnimation";

type ActivityReportProps = {
  post: PostType;
};
const Slug: NextPageWithLayout<ActivityReportProps> = (props) => {
  return (
    <div className=" w-dull prose m-auto mt-[200px] max-w-[700px]">
      <BoxAnimation>
        <div
          // transition={closeSpring}
          className="  relative aspect-square w-full max-w-max rounded-lg  bg-white "
        >
          <div
            style={{
              background: "linear-gradient(#0000002b, #00000000)",
            }}
            className=" absolute top-0 left-0 w-full rounded-lg p-4"
          >
            <h1
              // layoutId={`title-${props.post.slug}`}
              // transition={closeSpring}
              className=" z-50  text-3xl font-bold text-white duration-200	"
              style={{}}
            >
              {props.post.title}
            </h1>
          </div>
          {/* 画像 */}
          <div
          // transition={closeSpring}
          // layoutId={`image-${props.post.slug}`}
          >
            <Image
              className="h-full w-full rounded-lg object-cover"
              width={400}
              height={300}
              src={props.post.coverImage}
              alt={"image"}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
        </div>
      </BoxAnimation>
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
