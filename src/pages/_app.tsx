import type { AppPropsWithLayout } from "next/app";

import { AnimatePresence } from "framer-motion";

import { Layout } from "../components/Layout/Layout";
import "../styles/global.css";

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AnimatePresence mode="wait">
      {getLayout(<Component key={router.asPath} {...pageProps} />)}
    </AnimatePresence>
  );
}
