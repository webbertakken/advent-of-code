import Library from './lib'

const getInput = () => Library.getInput('day12').split('\n')

// Cardinal directions in order: Up, Right, Down, Left
const directions: { x: number; y: number }[] = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
]

// Diagonal directions corresponding to the order above:
const diagonalDirections: { x: number; y: number }[] = [
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 },
  { x: -1, y: -1 },
]

// Side A, Side B, and the corner in between, where the corner index is Side A's index + 10
const cornerSets = [
  [0, 1, 10],
  [1, 2, 11],
  [2, 3, 12],
  [3, 0, 13],
]

type PlotType = string

interface Region {
  area: number
  perimeter: number
  sides: number
  type: PlotType
}

function* getRegions(): Generator<Region> {
  const layout = getInput()
  const visited = new Set<string>()

  function* getAllPlots(): Generator<{ x: number; y: number; type: PlotType }> {
    for (let y = 0; y < layout.length; y++) {
      for (let x = 0; x < layout[y].length; x++) {
        if (visited.has(`${x},${y}`)) continue

        yield { x, y, type: layout[y][x] }
      }
    }
  }

  function getRegion(x: number, y: number, type: string): Region {
    const region = { area: 1, perimeter: 0, sides: 0, type }

    // Mark the region as visited
    visited.add(`${x},${y}`)

    // Check all adjacent for information about the region
    const sides: number[] = []
    for (const [index, direction] of directions.entries()) {
      const adjacentPosition = { x: x + direction.x, y: y + direction.y }
      const plotType = layout[adjacentPosition.y]?.[adjacentPosition.x]

      // Record the sides
      const diagonal = diagonalDirections[index]
      const diagonalPlotType = layout[y + diagonal.y]?.[x + diagonal.x]
      sides[index] = plotType === type ? 1 : 0
      sides[index + 10] = diagonalPlotType === type ? 1 : 0

      // Perimeter is places when the plot type is different
      if (plotType !== type) {
        region.perimeter += 1
        continue
      }

      // Explore the adjacent plot if it's homogenous and not visited before
      if (visited.has(`${adjacentPosition.x},${adjacentPosition.y}`)) continue
      const subRegion = getRegion(adjacentPosition.x, adjacentPosition.y, type)
      region.area += subRegion.area
      region.perimeter += subRegion.perimeter
      region.sides += subRegion.sides
    }

    // Use amount of corners to determine the number of sides
    const isCornerValid = ([a, b, c]: number[]) => sides[a] === sides[b] && (sides[a] === 0 || sides[c] === 0)
    region.sides += cornerSets.filter(isCornerValid).length

    return region
  }

  // Yield all regions
  for (const { x, y, type } of getAllPlots()) yield getRegion(x, y, type)
}

// Part 1
export const getCombinedPrice = () => [...getRegions()].map(({ area, perimeter }) => area * perimeter).sum()
console.log('Price of combined regions:', getCombinedPrice())

// Part 2
export const getDiscountedPrice = () => [...getRegions()].map(({ area, sides }) => area * sides).sum()
console.log('Price of combined regions with bulk discount:', getDiscountedPrice())
