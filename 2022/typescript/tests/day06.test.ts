import Library from "../lib.ts";
import { describe, expect, test, vi } from "vitest";
import { getFourNonConsecutiveChars, getFourteenNonConsecutiveChars } from "../day06.ts";

describe("Day 6", async (context) => {
  describe("getFourNonConsecutiveChars", () => {
    const examples = [
      { input: "bvwbjplbgvbhsrlpgdmjqwftvncz", expected: 5 },
      { input: "nppdvjthqldpwncqszvftbrmjlhg", expected: 6 },
      { input: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", expected: 10 },
      { input: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", expected: 11 },
    ];

    for (const { input, expected } of examples) {
      test("works with example ${input}", () => {
        const getInput = vi.spyOn(Library, "getInput").mockReturnValue(input);
        expect(getFourNonConsecutiveChars()).toEqual(expected);
        getInput.mockRestore();
      });
    }

    test("works with real data", () => {
      expect(getFourNonConsecutiveChars()).toEqual(1238);
    });
  });

  describe("getFourteenNonConsecutiveChars", () => {
    const examples = [
      { input: "mjqjpqmgbljsphdztnvjfqwrcgsmlb", expected: 19 },
      { input: "bvwbjplbgvbhsrlpgdmjqwftvncz", expected: 23 },
      { input: "nppdvjthqldpwncqszvftbrmjlhg", expected: 23 },
      { input: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", expected: 29 },
      { input: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", expected: 26 },
    ];

    for (const { input, expected } of examples) {
      test("works with example ${input}", () => {
        const getInput = vi.spyOn(Library, "getInput").mockReturnValue(input);
        expect(getFourteenNonConsecutiveChars()).toEqual(expected);
        getInput.mockRestore();
      });
    }

    test("works with real data", () => {
      expect(getFourteenNonConsecutiveChars()).toEqual(3037);
    });
  });
});
