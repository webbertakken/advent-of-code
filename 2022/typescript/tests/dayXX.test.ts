import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { part1, part2 } from "../dayXX.ts";

Deno.test("Day XX", async (context) => {
  await context.step("part1", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("dayXX-example"));
      assertEquals(part1(), 0);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      // assertEquals(part1(), 0);
    });
  });

  await context.step("part2", async (test) => {
    await test.step(`works with example input`, async () => {
      // const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("dayXX-example"));
      // assertEquals(part2(), 0);
      // getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      // assertEquals(part2(), 0);
    });
  });
});
