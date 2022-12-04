import Library from "./lib.ts";

const getGroups = (): number[][] =>
  Library.getInput("day04")
    .split("\n")
    .map((pair) =>
      pair
        .split(",")
        .map((range) => range.split("-"))
        .flat()
        .map((number) => Number(number))
    );

// Part 1
export const getNumberOfCompleteOverlaps = (): number => {
  return getGroups().reduce((acc, [a, b, c, d]) => {
    const contains = a >= c && b <= d;
    const completeOverlap = c >= a && d <= b;
    return contains || completeOverlap ? acc + 1 : acc;
  }, 0);
};
console.log("Number of complete overlaps:", getNumberOfCompleteOverlaps());

// Part 2
export const getNumberOfPartialOverlaps = (): number => {
  return getGroups().reduce((acc, [a, b, c, d]) => {
    const leftOverlap = a >= c && a <= d;
    const rightOverlap = b >= c && b <= d;
    const completeOverlap = a <= c && b >= d;
    const contains = a >= c && b <= d;
    return leftOverlap || rightOverlap || completeOverlap || contains ? acc + 1 : acc;
  }, 0);
};
console.log("Number of partial overlaps:", getNumberOfPartialOverlaps());
