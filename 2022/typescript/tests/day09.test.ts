import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { getNinthTailVisitCount, getTailVisitedCount } from "../day09.ts";

describe("Day 9", async (context) => {
  describe("getTailVisited", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day09-example"));
      expect(getTailVisitedCount()).toEqual(13);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(getTailVisitedCount()).toEqual(6098);
    });
  });

  describe("getNinthTailVisitCount", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day09-example"));
      expect(getNinthTailVisitCount()).toEqual(1);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(getNinthTailVisitCount()).toEqual(2597);
    });
  });
});
