import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { strategy1Score, strategy2Score } from "../day02.ts";

describe("Day 2", async (context) => {
  describe("strategy1Score", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day02-example"));
      expect(strategy1Score()).toEqual(15);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(strategy1Score()).toEqual(12740);
    });
  });

  describe("strategy2Score", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day02-example"));
      expect(strategy2Score()).toEqual(12);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(strategy2Score()).toEqual(11980);
    });
  });
});
