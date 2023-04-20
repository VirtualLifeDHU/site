import type { AppPropsWithLayout } from "next/app";

import { AnimatePresence } from "framer-motion";
import { Zen_Kaku_Gothic_Antique, Inter } from "@next/font/google";

import "../styles/global.css";
import "react-modern-drawer/dist/index.css";
import Head from "next/head";
import { projextData } from "../lib/ProjectData";
import NextHeadSeo from "next-head-seo";

const InterFontNomal = Inter({
  weight: "400",
  subsets: ["cyrillic"],
});
const InterFontBold = Inter({
  weight: "700",
  subsets: ["cyrillic"],
});

const InterFontVeryBold = Inter({
  weight: "800",
  subsets: ["cyrillic"],
});
const InterFontThin = Inter({
  weight: "100",
  subsets: ["cyrillic"],
});
const ZenKakuGothicAntique_normal = Zen_Kaku_Gothic_Antique({
  weight: "400",
  subsets: ["cyrillic"],
});
const ZenKakuGothicAntique_bold = Zen_Kaku_Gothic_Antique({
  weight: "700",
  subsets: ["cyrillic"],
});

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  // layout で色々としたりしなkったりするkj
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="noindex" />
      </Head>
      <NextHeadSeo
        title={projextData.siteName}
        og={{
          title: projextData.siteName,
          image: `${projextData.url}/ogp.png`,
          description: projextData.description,
          type: "website",
        }}
        twitter={{
          card: "summary_large_image",
        }}
      />

      <style jsx global>{`
        html {
          font-family: ${InterFontBold} ${InterFontNomal} ${InterFontVeryBold}
              ${InterFontThin} ${ZenKakuGothicAntique_normal.style.fontFamily},
            ${ZenKakuGothicAntique_bold};
        }
      `}</style>

      <AnimatePresence exitBeforeEnter mode="wait">
        {getLayout(<Component key={router.asPath} {...pageProps} />)}
      </AnimatePresence>
    </>
  );
}
