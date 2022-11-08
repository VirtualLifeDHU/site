import styles from "./LoadingAnimationA.module.scss";

import { motion } from "framer-motion";
import React from "react";
type LoadingAnimationAProps = {
  children: React.ReactNode;
};

export const LoadingAnimationA = (props: LoadingAnimationAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 1,
      }}
      exit={{ opacity: 0, y: 100 }}
    >
      {props.children}
    </motion.div>
  );
};
