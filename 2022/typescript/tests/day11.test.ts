import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { monkeyBusinessLevelAfter10k, monkeyBusinessLevelAfter20 } from "../day11.ts";

describe("Day 11", async (context) => {
  describe("monkeyBusinessLevelAfter20", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day11-example"));
      expect(monkeyBusinessLevelAfter20()).toEqual(10605);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(monkeyBusinessLevelAfter20()).toEqual(50616);
    });
  });

  describe("monkeyBusinessLevelAfter10k", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day11-example"));
      expect(monkeyBusinessLevelAfter10k()).toEqual(2713310158);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(monkeyBusinessLevelAfter10k()).toEqual(11309046332);
    });
  });
});
