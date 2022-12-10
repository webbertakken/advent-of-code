import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { topOfStacksUsingMover9000, topOfStacksUsingMover9001 } from "../day05.ts";

Deno.test("Day 5", async (context) => {
  await context.step("topOfStacksUsingMover9000", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day05-example"));
      assertEquals(topOfStacksUsingMover9000(), "CMZ");
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(topOfStacksUsingMover9000(), "RFFFWBPNS");
    });
  });

  await context.step("topOfStacksUsingMover9001", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day05-example"));
      assertEquals(topOfStacksUsingMover9001(), "MCD");
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(topOfStacksUsingMover9001(), "CQQBBJFCS");
    });
  });
});
