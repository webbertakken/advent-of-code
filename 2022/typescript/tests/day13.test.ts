import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { sumOfIndicesOfCorrectPairs, decoderKeyForDistressSignal } from "../day13.ts";

describe("Day 13", async (context) => {
  describe("sumOfIndicesOfCorrectPairs", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day13-example"));
      expect(sumOfIndicesOfCorrectPairs()).toEqual(13);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(sumOfIndicesOfCorrectPairs()).toEqual(5905);
    });
  });

  describe("decoderKeyForDistressSignal", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day13-example"));
      expect(decoderKeyForDistressSignal()).toEqual(140);
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(decoderKeyForDistressSignal()).toEqual(21691);
    });
  });
});
