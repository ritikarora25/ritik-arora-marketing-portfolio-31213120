import { act, cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import IntroAnimation from "@/components/IntroAnimation";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

const pressSpace = () => {
  const event = new KeyboardEvent("keydown", { key: " ", cancelable: true });
  act(() => { window.dispatchEvent(event); });
  return event.defaultPrevented;
};

describe("Intro keyboard controls", () => {
  it("advances with Space while playing but releases it immediately after skipping", () => {
    vi.useFakeTimers();
    vi.stubGlobal("innerWidth", 1280);
    const { getByRole } = render(<IntroAnimation />);
    expect(pressSpace()).toBe(true);
    fireEvent.click(getByRole("button", { name: "Skip intro" }));
    expect(pressSpace()).toBe(false);
    act(() => { vi.advanceTimersByTime(300); });
    expect(pressSpace()).toBe(false);
  });

  it("releases Space after the intro finishes naturally", () => {
    vi.useFakeTimers();
    vi.stubGlobal("innerWidth", 1280);
    render(<IntroAnimation />);
    for (let i = 0; i < 10; i++) {
      act(() => { vi.advanceTimersByTime(10000); });
    }
    expect(pressSpace()).toBe(false);
  });

  it("does not capture Space when the intro is skipped on mobile", () => {
    vi.stubGlobal("innerWidth", 390);
    render(<IntroAnimation />);
    expect(pressSpace()).toBe(false);
  });
});