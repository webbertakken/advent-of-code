import Library from "../lib.ts";
import { getNumberOfCompleteOverlaps, getNumberOfPartialOverlaps } from "../day04.ts";
import { assertEquals, assert } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";

Deno.test("Day 4", async (test) => {
  await test.step("getNumberOfCompleteOverlaps returns the right number for test data", async () => {
    const stub = sinon.stub(Library, "getInput").returns(Library.getTestInput("day04-example"));
    assertEquals(getNumberOfCompleteOverlaps(), 2);
    stub.restore();
  });

  await test.step("getNumberOfCompleteOverlaps returns the right number for real data", async () => {
    assert(getNumberOfCompleteOverlaps());
    assertEquals(getNumberOfCompleteOverlaps(), 556);
  });

  await test.step("getNumberOfCompleteOverlaps returns the right number for test data", async () => {
    const stub = sinon.stub(Library, "getInput").returns(Library.getTestInput("day04-example"));
    assertEquals(getNumberOfPartialOverlaps(), 4);
    stub.restore();
  });

  await test.step("getNumberOfPartialOverlaps returns the right number for real data", async () => {
    assert(getNumberOfPartialOverlaps());
    assertEquals(getNumberOfPartialOverlaps(), 876);
  });
});
