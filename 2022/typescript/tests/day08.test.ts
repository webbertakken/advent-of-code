import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { getHighestViewScore, getVisibleTrees } from "../day08.ts";

describe("Day 8", async (context) => {
  describe("getVisibleTrees", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day08-example"));
      expect(getVisibleTrees()).toEqual(21);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(getVisibleTrees()).toEqual(1647);
    });
  });

  describe("getHighestViewScore", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day08-example"));
      expect(getHighestViewScore()).toEqual(8);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(getHighestViewScore()).toEqual(392080);
    });
  });
});
