import Library from "./lib.ts";

const input = Library.getInput("day01");

const getTotals = () => {
  const groups = input.split("\n\n");
  return groups.map((group) => group.split("\n").reduce((acc, number) => acc + Number(number), 0));
};

// Part 1
export const highestTotal = () => {
  return Math.max(...getTotals());
};
console.log("Max:", highestTotal());

// Part 2
export const sumOfTopThree = () => {
  const topThreeTotals = getTotals()
    .sort((a, b) => b - a)
    .slice(0, 3);

  return topThreeTotals.reduce((acc, number) => acc + number, 0);
};
console.log("Sum of top three:", sumOfTopThree());
