import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("renders default initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("renders non-default initial count", () => {
    const initialCount = 42;
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: initialCount },
    });
    expect(result.current.count).toBe(initialCount);
  });
});
