import { PostType } from "../../../types/Posts";
import { Card } from "./Card";

type CardListProps = {
  Posts: PostType[];
};
export const CardList = (props: CardListProps) => {
  return (
    <div className="m-auto max-w-max">
      <div className="  grid  grid-cols-2 gap-4">
        {props.Posts.map((value) => (
          <Card post={value} key={value.slug} />
        ))}
      </div>
    </div>
  );
};
