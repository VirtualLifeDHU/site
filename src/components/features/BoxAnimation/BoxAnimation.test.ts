import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BoxAnimation } from "./BoxAnimation";

describe("BoxAnimationのテスト", () => {
  it("テストケースと期待される結果を記述", () => {
    render(<ToDoList />);
    expect(screen.getByText("ToDo List")).toBeTruthy();
  });
});
