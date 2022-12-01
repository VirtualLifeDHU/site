import { useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PostType } from "../../../types/Posts";
import { openSpring } from "./Animation";

export type CardProps = {
  post: PostType;
};

export const Card: React.FC<CardProps> = (props) => {
  const y = useMotionValue(0);
  const zIndex = useMotionValue(false ? 2 : 0);

  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);

  const containerRef = useRef(null);
  return (
    <Link href={`/activity_report/${props.post.slug}`} className={""}>
      {/* カード本体 */}
      <motion.div
        layoutId={`card-${props.post.slug}`}
        className="relative aspect-square w-full max-w-[300px] rounded-lg bg-white	"
        // transition={openSpring}
      >
        {/* タイトル */}
        <div className=" absolute top-0 left-0 p-4">
          <motion.h1
            layoutId={`title-${props.post.slug}`}
            className=" text-xl font-bold text-white duration-200	"
            // transition={openSpring}
            style={{}}
          >
            {props.post.title}
          </motion.h1>
        </div>
        {/* 画像 */}
        <motion.div
          // transition={openSpring}
          layoutId={`image-${props.post.slug}`}
        >
          <Image
            className="h-full w-full rounded-lg object-cover"
            width={400}
            height={300}
            src={props.post.coverImage}
            alt={"image"}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
};
