import type { AppPropsWithLayout } from "next/app";

import { AnimatePresence } from "framer-motion";

import "../styles/global.css";
import "react-modern-drawer/dist/index.css";

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  // layout で色々としたりしなkったりするkj
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AnimatePresence mode="wait">
      {getLayout(<Component key={router.asPath} {...pageProps} />)}
    </AnimatePresence>
  );
}
