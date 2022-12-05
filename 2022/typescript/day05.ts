import Library from "./lib.ts";

const getInput = (): { stacks: { [key: number]: string[] } } => {
  const [current, instructions] = Library.getInput("day05").split(/\n\s1.*\n\n/);

  const stacks = {};
  current.split("\n").forEach((line) => {
    for (let i = 1, j = 1; i < line.length; i += 4, j++) {
      if (line[i].trim()) stacks[j] ? stacks[j].push(line[i]) : (stacks[j] = [line[i]]);
    }
  });

  const matcher = /move (?<amount>\d+) from (?<from>\d+) to (?<to>\d+)/;
  const moves = instructions.split("\n").map((line) => line.match(matcher).groups);

  return { stacks, moves };
};

// Part 1
export const part1 = () => {
  const { stacks, moves } = getInput();

  moves.forEach(({ amount, from, to }) => stacks[to].unshift(...stacks[from].splice(0, amount).reverse()));

  return Object.values(stacks)
    .map((stack) => stack[0])
    .join("");
};
console.log("Part 1:", part1());

// Part 2
export const part2 = () => {
  const { stacks, moves } = getInput();

  moves.forEach(({ amount, from, to }) => stacks[to].unshift(...stacks[from].splice(0, amount)));

  return Object.values(stacks)
    .map((stack) => stack[0])
    .join("");
};
console.log("Part 2:", part2());
