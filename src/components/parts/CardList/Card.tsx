import Image from "next/image";
import React from "react";
import { PostType } from "../../../types/Posts";

export type CardProps = {
  post: PostType;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="relative aspect-square w-full max-w-[300px] rounded-lg bg-white	">
      <div className=" absolute top-0 left-0 p-4">
        <h2 className="text-xl font-bold text-white	" style={{}}>
          {" "}
          {props.post.title}
        </h2>
      </div>
      <Image
        className="h-full w-full rounded-lg object-cover"
        width={400}
        height={300}
        src={props.post.coverImage}
        alt={"image"}
      />
    </div>
  );
};
