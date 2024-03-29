import React, { useEffect, useState, useMemo } from "react";
import { useThrottle } from "./useThrottle";
type sizeArgType = {
  size: { from: number; end: number };
  ref?: React.RefObject<HTMLElement>;
};
export const useOffsetTop = (args: sizeArgType) => {
  const [viewportTop, setViewportTop] = useState<number | undefined>(undefined);
  const [pageOffsetTop, setPageOffsetTop] = useState<number | undefined>(
    undefined
  );

  const handler = useThrottle(() => {
    if (!args.ref?.current) return;

    const clientRect = args.ref.current.getBoundingClientRect();
    setViewportTop(clientRect.top);
    const newPageOffsetTop = clientRect.top + window.pageYOffset;
    setPageOffsetTop(newPageOffsetTop);
  }, 100); // 100msに一度実行

  useEffect(() => {
    if (!args.ref?.current) return;

    // マウント時にも実行
    handler();
    window.addEventListener("scroll", handler);

    // アンマウント時にイベントリスナーを解除
    return () => window.removeEventListener("scroll", handler);
  }, [handler]);

  const size = useMemo(() => {
    // 位置を取得できなかったときは最大サイズとして表示
    if (pageOffsetTop === undefined || viewportTop === undefined)
      return args.size.from;

    // 位置に応じてサイズ計算
    const size =
      args.size.end +
      (viewportTop / pageOffsetTop) * (args.size.from - args.size.end);

    return size.toFixed(1);
  }, [pageOffsetTop, viewportTop]);

  return { viewportTop, pageOffsetTop, size };
};
