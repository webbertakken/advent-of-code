import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { sumOfIndicesOfCorrectPairs, decoderKeyForDistressSignal } from "../day13.ts";

Deno.test("Day 13", async (context) => {
  await context.step("sumOfIndicesOfCorrectPairs", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day13-example"));
      assertEquals(sumOfIndicesOfCorrectPairs(), 13);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(sumOfIndicesOfCorrectPairs(), 5905);
    });
  });

  await context.step("decoderKeyForDistressSignal", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day13-example"));
      assertEquals(decoderKeyForDistressSignal(), 140);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(decoderKeyForDistressSignal(), 21691);
    });
  });
});
