import { useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { PostType } from "../../../types/Posts";

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
    <div className={""}>
      {/* カード本体 */}
      <div className="relative aspect-square w-full max-w-[300px] rounded-lg bg-white	">
        {/* タイトル */}
        <div className=" absolute top-0 left-0 p-4">
          <h2 className="text-xl font-bold text-white	" style={{}}>
            {" "}
            {props.post.title}
          </h2>
        </div>
        {/* 画像 */}
        <Image
          className="h-full w-full rounded-lg object-cover"
          width={400}
          height={300}
          src={props.post.coverImage}
          alt={"image"}
        />
      </div>
    </div>
  );
};
