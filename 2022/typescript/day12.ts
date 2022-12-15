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

  // Cost of the cheapest path from start to n currently known
  const gScore: { [key: string]: number } = {};
  gScore[start] = 0;

  // Current best guess as to how cheap a path could be from start to finish if it goes through n
  const fScore: { [key: string]: number } = {};
  while (toExplore.length > 0) {
    // Node with lowest fScore
    const current = toExplore.sort((a, b) => fScore[a] - fScore[b]).shift()!;
    // Found
    if (current === end) return reconstructPath(cameFrom, current);
    // Index neighbours
    const [x, y] = current.split(",").map((x) => parseInt(x));
    const shouldLog = x === 133 && y === 27;
    if (shouldLog) console.log("exploring neighbours of:", current, matrix[x][y]);
    const neighbours = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].filter(([x, y]) => x >= 0 && y >= 0 && x < sizeX && y < sizeY);
    // Check neighbours for lowest fScore
    for (const [x, y] of neighbours) {
      if (shouldLog) console.log("exploring neighbour:", x, y, matrix[x][y]);
      const neighbour = `${x},${y}`;
      const tentativeGScore = gScore[current] + heuristic(current, neighbour); // Todo - or 0?
      // console.log("tentativeGScore", tentativeGScore);
      // If score is not higher than existing score, this neighbour is a good candidate.
      if (shouldLog) console.log(tentativeGScore, "smaller than ? ", gScore[neighbour] || Infinity);
      if (tentativeGScore < (gScore[neighbour] || Infinity)) {
        cameFrom[neighbour] = current;
        gScore[neighbour] = tentativeGScore;
        fScore[neighbour] = tentativeGScore + 1;
        if (!toExplore.includes(neighbour)) toExplore.push(neighbour);
      } else {
        if (shouldLog) console.log("not a good candidate");
      }
    }
  }

  throw new Error("No path found");
};

// Store lines into matrix

// Part 1
export const fewestStepsRequired = () => {
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
    return [0, 1].includes(matrix[bx][by].charCodeAt(0) - matrix[ax][ay].charCodeAt(0)) ? 1 : Infinity;
  };

  const path = aStar(matrix, start!, end!, heuristic);
  return path.length - 1;
};
// console.log("Fewest steps required:", fewestStepsRequired());

// Part 2
export const part2 = () => {
  getInput();

  return 0;
};
// console.log("Part 2:", part2());
