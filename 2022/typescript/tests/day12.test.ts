import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { fewestStepsRequired /* part2 */ } from "../day12.ts";

Deno.test("Day 12", async (context) => {
  await context.step("part1", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day12-example"));
      assertEquals(fewestStepsRequired(), 31);
      getInput.restore();
    });

    // await test.step(`works with real input`, async () => {
    //   assertEquals(fewestStepsRequired(), 0);
    // });
  });

  await context.step("part2", async (test) => {
    // await test.step(`works with example input`, async () => {
    // const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day12-example"));
    // assertEquals(part2(), 0);
    // getInput.restore();
    // });
    // await test.step(`works with real input`, async () => {
    // assertEquals(part2(), 0);
    // });
  });
});
