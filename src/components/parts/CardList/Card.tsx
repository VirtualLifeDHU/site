import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostType } from "../../../types/Posts";
import style from "./CardList.module.scss";

export type CardProps = {
  post: PostType;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Link href={`/activity_report/${props.post.slug}`} className={""}>
      {/* カード本体 */}
      <div
        className="relative aspect-square  max-w-[300px] rounded-lg  "
        // transition={openSpring}
      >
        {/* タイトル */}
        <div
          className={`${style.container} absolute top-0 left-0 w-full rounded-t-lg  p-4`}
        >
          <h1
            // layoutId={`${props.post.slug}`}
            className="z-50  text-xl font-bold  text-white duration-200	"
            // transition={openSpring}
            style={{}}
          >
            {props.post.title}
          </h1>
        </div>
        {/* 画像 */}
        <div
          // layoutId={`image-${props.post.slug}`}
          className={"aspect-square w-full"}
        >
          <Image
            className="aspect-square   rounded-lg object-cover"
            width={300}
            height={300}
            src={props.post.coverImage}
            alt={"image"}
          />
        </div>
      </div>
    </Link>
  );
};
