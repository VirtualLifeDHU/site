import { useCardList } from "./useCardList";
import styles from "./CardList.module.scss";
import { PostType } from "../../../types/Posts";
import { Card } from "./Card";

type CardListProps = {
  Posts: PostType[];
};
export const CardList = (props: CardListProps) => {
  return (
    <div className="relative m-auto ml-auto grid max-w-max grid-cols-2 gap-4">
      {props.Posts.map((value, key) => (
        <Card post={value} key={value.slug || key} />
      ))}
    </div>
  );
};
