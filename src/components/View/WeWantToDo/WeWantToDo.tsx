import ReactMarkdown from "react-markdown";
import { BoxAnimation } from "../../features/BoxAnimation";
const text = `
# バーチャルライフで今年やっていきたい事

## アバター学生証
せっかくの首から下げれる学生証、カッコいいけど顔写真があって嫌だ！という人が沢山いると思います。
そこで学生証ケースにピッタリでご自身のアバターやSNSのアイコンを使用できるアバター学生証を作る企画をしています！

## 作品展示ワールド
去年に引き続き、サークルメンバー達のあらゆるジャンルの作品を展示したワールドの制作を予定しています！
皆さんのすばらしい作品をVRの世界に展示してみませんか？

## サバゲーワールド制作
ミリ研サークル協力の元VRサバゲーができるワールドの企画が進行しています！モデリングやデザイン、サウンド等スタッフを応募しています！`;

export const WeWantToDo = () => {
  return (
    <BoxAnimation>
      <div className="prose relative m-auto  ml-auto max-w-[700px] ">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </BoxAnimation>
  );
};
