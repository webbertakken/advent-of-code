import Library from "./lib.ts";

const getInput = () => Library.getInput("day12").split("\n");

const reconstructPath = (cameFrom: { [key: string]: string }, current: string) => {
  const totalPath = [current];
  while (cameFrom[current]) {
    current = cameFrom[current];
    totalPath.unshift(current);
  }
  return totalPath;
};

const aStar = (matrix: string[][], start: string, end: string, heuristic: (a: string, b: string) => number): any => {
  const sizeX = matrix.length;
  const sizeY = matrix[0].length;
  const toExplore = [start];
  const cameFrom: { [key: string]: string } = {};
  const lowestCost: { [key: string]: number } = { [start]: 0 };

  while (toExplore.length >= 1) {
    // Explore the lowest cost node
    const current = toExplore.sort((a, b) => lowestCost[a] - lowestCost[b]).shift()!;

    // The end
    if (current === end) return reconstructPath(cameFrom, current);

    // The neighbours
    const [x, y] = current.split(",").map((x) => parseInt(x));
    const neighbours = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].filter(([x, y]) => x >= 0 && y >= 0 && x < sizeX && y < sizeY);
    // Explore neighbours
    const currentScore = lowestCost[current];
    for (const [nx, ny] of neighbours) {
      const neighbour = `${nx},${ny}`;
      const possibleLowestCost = currentScore + heuristic(current, neighbour);
      // We found the shortest path to this neighbour
      if (possibleLowestCost < (lowestCost[neighbour] || Infinity)) {
        if (current !== start) cameFrom[neighbour] = current;
        lowestCost[neighbour] = possibleLowestCost;
        if (!toExplore.includes(neighbour)) toExplore.push(neighbour);
      }
    }
  }

  throw new Error("No path found");
};

const getPathAndMatrix = () => {
  const matrix: string[][] = getInput().map((line) => line.split(""));

  let start: string, end: string;
  matrix.forEach((row, x) => {
    row.forEach((col, y) => {
      // Start "S"
      if (col === "S") {
        start = `${x},${y}`;
        matrix[x][y] = String.fromCharCode(96); // before a
      }
      // End "E"
      if (col === "E") {
        end = `${x},${y}`;
        matrix[x][y] = String.fromCharCode(123); // after z
      }
    });
  });

  const heuristic = (a: string, b: string): number => {
    const [ax, ay] = a.split(",").map((x) => parseInt(x));
    const [bx, by] = b.split(",").map((x) => parseInt(x));
    return matrix[bx][by].charCodeAt(0) - matrix[ax][ay].charCodeAt(0) <= 1 ? 1 : Infinity;
  };

  return [aStar(matrix, start!, end!, heuristic), matrix];
};

// Part 1
export const fewestStepsRequired = () => {
  return getPathAndMatrix()[0].length;
};
console.log("Fewest steps required:", fewestStepsRequired());

// Part 2
export const fewestStepsRequiredFromAnyA = () => fewestStepsRequired() - 1;
console.log("Fewest steps required from any A:", fewestStepsRequiredFromAnyA());
