import { cleanup, renderHook } from "@testing-library/react-hooks";

import { useThrottle } from "../useThrottle";

describe("useThrottleのテスト", () => {
  beforeEach(() => {
    cleanup();
  });

  it("テストケースと期待される結果を記述", () => {
    const { result } = renderHook(() => {
      return useThrottle();
    });
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
