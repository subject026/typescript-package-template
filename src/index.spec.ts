import { describe, it, expect } from "vitest";

import { adder, heyy } from "./";

describe("Nice tests!", () => {
  it("says heyy", async () => {
    expect(heyy()).toBe("heyy");
  });

  it("adds 2 numbers", async () => {
    expect(adder(2, 2)).toBe(4);
  });
});
