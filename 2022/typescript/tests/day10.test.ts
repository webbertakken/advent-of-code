import Library from "../lib.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import sinon from "https://cdn.skypack.dev/sinon@11.1.2?dts";
import { executionSequence, decodedLettersAsImage, sumOfSixSignalStrengths } from "../day10.ts";

Deno.test("Day 10", async (context) => {
  await context.step("iterator", async (test) => {
    await test.step(`results in the right number`, async () => {
      // Arrange
      const getInput = sinon.stub(Library, "getInput").returns(`noop\naddx 3\naddx -5`);
      const iterator = executionSequence();

      // Act
      let x;
      while (true) {
        const { value, done } = iterator.next();
        if (done) break;
        x = value;
      }

      // Assert
      assertEquals(x, -1);
      getInput.restore();
    });
  });

  await context.step("sumOfSixSignalStrenths", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day10-example"));
      assertEquals(sumOfSixSignalStrengths(), 13140);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(sumOfSixSignalStrengths(), 14220);
    });
  });

  await context.step("decodedLettersAsImage", async (test) => {
    await test.step(`works with example input`, async () => {
      const getInput = sinon.stub(Library, "getInput").returns(Library.getTestInput("day10-example"));
      assertEquals(decodedLettersAsImage(), [
        "##..##..##..##..##..##..##..##..##..##..",
        "###...###...###...###...###...###...###.",
        "####....####....####....####....####....",
        "#####.....#####.....#####.....#####.....",
        "######......######......######......####",
        "#######.......#######.......#######.....",
      ]);
      getInput.restore();
    });

    await test.step(`works with real input`, async () => {
      assertEquals(decodedLettersAsImage(), [
        "####.###...##..###..#....####.####.#..#.",
        "...#.#..#.#..#.#..#.#....#.......#.#..#.",
        "..#..#..#.#..#.#..#.#....###....#..#..#.",
        ".#...###..####.###..#....#.....#...#..#.",
        "#....#.#..#..#.#.#..#....#....#....#..#.",
        "####.#..#.#..#.#..#.####.#....####..##..",
      ]);
    });
  });
});
