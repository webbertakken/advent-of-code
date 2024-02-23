import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { topOfStacksUsingMover9000, topOfStacksUsingMover9001 } from "../day05.ts";

describe("Day 5", async (context) => {
  describe("topOfStacksUsingMover9000", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day05-example"));
      expect(topOfStacksUsingMover9000()).toEqual("CMZ");
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(topOfStacksUsingMover9000()).toEqual("RFFFWBPNS");
    });
  });

  describe("topOfStacksUsingMover9001", () => {
    test("works with example input", () => {
      const getInput = vi.spyOn(Library, "getInput").mockReturnValue(Library.getTestInput("day05-example"));
      expect(topOfStacksUsingMover9001()).toEqual("MCD");
      getInput.mockRestore();
    });

    test("works with real input", () => {
      expect(topOfStacksUsingMover9001()).toEqual("CQQBBJFCS");
    });
  });
});
