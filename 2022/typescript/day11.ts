import Library from "./lib.ts";

const getInput = () => Library.getInput("day11").split("\n\n");

const getMonkeys = (isWorrying: boolean) => {
  type Monkey = { receive: (x: number) => void; takeTurn: () => void; getCount: () => number };
  const monkeys: Monkey[] = [];
  type Mod = (level: number) => number;
  const createMonkey = (startItems: number[], operation: Mod, calm: Mod, test: Mod): Monkey => {
    let inspections = 0;
    const getCount = () => inspections;

    const items = startItems;
    const receive = (item: number) => items.push(item);
    const takeTurn = () => {
      while (items.length > 0) {
        const item = calm(operation(items.shift()!));
        monkeys[test(item)].receive(item);
        inspections++;
      }
    };

    return { receive, takeTurn, getCount };
  };

  let divisorsMultiplied = 1;
  // https://regex101.com/r/mNKjJu/1
  const matcher = /: (?<items>(?:\d+,? ?)+)\n.*= (?<op>.*)\n.*by (?<divisor>\d+)\n.*y (?<yes>\d+)\n.*y (?<no>\d+)/;
  getInput().map((x) => {
    const { items, op, divisor, yes, no } = x.match(matcher)!.groups!;
    const startItems = items.split(", ").map(Number);

    divisorsMultiplied *= Number(divisor);
    const calm = (x: number) => (isWorrying ? Math.floor(x / 3) : x % divisorsMultiplied);
    const test = (x: number) => (x % Number(divisor) === 0 ? Number(yes) : Number(no));
    const operation = (old: number) => eval(op);
    monkeys.push(createMonkey(startItems, operation, calm, test));
  });

  return monkeys;
};

const monkeyBusinessLevel = (rounds: number, isWorrying = true) => {
  const monkeys = getMonkeys(isWorrying);

  for (let i = 1; i <= rounds; i++) {
    monkeys.forEach((x) => x.takeTurn());
  }

  return monkeys
    .map((x) => x.getCount())
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, x) => acc * x, 1);
};

// // Part 1
export const monkeyBusinessLevelAfter20 = () => monkeyBusinessLevel(20);
console.log("Monkey business level (20):", monkeyBusinessLevelAfter20());

// Part 2
export const monkeyBusinessLevelAfter10k = () => monkeyBusinessLevel(10_000, false);
console.log("Monkey business level (10k):", monkeyBusinessLevelAfter10k());
