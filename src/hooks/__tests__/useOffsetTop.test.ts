import { cleanup, renderHook } from "@testing-library/react-hooks";

import { useOffsetTop } from "../useOffsetTop";

describe("useOffsetTopのテスト", () => {
  beforeEach(() => {
    cleanup();
  });

  it("テストケースと期待される結果を記述", () => {
    const { result } = renderHook(() => {
      return useOffsetTop();
    });
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
