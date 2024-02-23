import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { getNumberOfCompleteOverlaps, getNumberOfPartialOverlaps } from "../day04.ts";

describe("Day 4", () => {
  describe("getNumberOfCompleteOverlaps", () => {
    test("returns the right number for test data", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day04-example"));
      expect(getNumberOfCompleteOverlaps()).toEqual(2);
      getInput.mockRestore();
    });

    test("returns the right number for real data", () => {
      expect(getNumberOfCompleteOverlaps()).toEqual(556);
    });
  });

  describe("getNumberOfPartialOverlaps", () => {
    test("returns the right number for test data", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day04-example"));
      expect(getNumberOfPartialOverlaps()).toEqual(4);
      getInput.mockRestore();
    });

    test("returns the right number for real data", () => {
      expect(getNumberOfPartialOverlaps()).toEqual(876);
    });
  });
});
