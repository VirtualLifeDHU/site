import { ReactNode } from "react";
import { motion } from "framer-motion";

type BoxAnimationProps = {
  children: ReactNode;
};

export const BoxAnimation = (props: BoxAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 10 }}
      // ref={comp}
      className=""
    >
      <div className="moveing">{props.children}</div>
    </motion.div>
  );
};
