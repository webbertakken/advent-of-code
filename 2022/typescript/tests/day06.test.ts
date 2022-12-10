import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { getFourNonConsecutiveChars, getFourteenNonConsecutiveChars } from "../day06.ts";

Deno.test("Day 6", async (context) => {
  await context.step("getFourNonConsecutiveChars", async (test) => {
    const examples = [
      { input: "bvwbjplbgvbhsrlpgdmjqwftvncz", expected: 5 },
      { input: "nppdvjthqldpwncqszvftbrmjlhg", expected: 6 },
      { input: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", expected: 10 },
      { input: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", expected: 11 },
    ];

    for (const { input, expected } of examples) {
      await test.step(`works with example ${input}`, async () => {
        const getInput = sinon.stub(Library, "getInput").returns(input);
        assertEquals(getFourNonConsecutiveChars(), expected);
        getInput.restore();
      });
    }

    await test.step(`works with real data`, async () => {
      assertEquals(getFourNonConsecutiveChars(), 1238);
    });
  });

  await context.step("getFourteenNonConsecutiveChars", async (test) => {
    const examples = [
      { input: "mjqjpqmgbljsphdztnvjfqwrcgsmlb", expected: 19 },
      { input: "bvwbjplbgvbhsrlpgdmjqwftvncz", expected: 23 },
      { input: "nppdvjthqldpwncqszvftbrmjlhg", expected: 23 },
      { input: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", expected: 29 },
      { input: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", expected: 26 },
    ];

    for (const { input, expected } of examples) {
      await test.step(`works with example ${input}`, async () => {
        const getInput = sinon.stub(Library, "getInput").returns(input);
        assertEquals(getFourteenNonConsecutiveChars(), expected);
        getInput.restore();
      });
    }

    await test.step(`works with real data`, async () => {
      assertEquals(getFourteenNonConsecutiveChars(), 3037);
    });
  });
});
