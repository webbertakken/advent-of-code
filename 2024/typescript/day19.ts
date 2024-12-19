import Library from './lib'

const getInventory = () => {
  const [towels, designs] = Library.getInput('day19')
    .split('\n\n')
    .map((s) => s.split(/(\n|, )/g))
  return { towels, designs: designs }
}

const createIsPossible = (towels: string[]) => {
  return (design: string) => design.match(new RegExp(`^(${towels.join('|')})+$`, 'g'))
}

const createCountPossibilities = (towels: string[]) => {
  const matches = new Map<string, number>()

  const countPossibilities = (design: string): number => {
    if (matches.has(design)) return matches.get(design)!
    let possibilities = towels.includes(design) ? 1 : 0

    for (const towel of towels) {
      if (design.startsWith(towel)) {
        const remainder = design.slice(towel.length)
        const nextCount = countPossibilities(remainder)
        possibilities += nextCount
      }
    }

    matches.set(design, possibilities)
    return possibilities
  }

  return countPossibilities
}

// Part 1
export const getNumberOfDesiredDesignsPossible = () => {
  const { towels, designs } = getInventory()

  const isPossible = createIsPossible(towels)

  return designs.filter(isPossible).length
}
console.log('Number of desired designs possible:', getNumberOfDesiredDesignsPossible())

// Part 2
export const getNumberOfAllPossibleDesigns = () => {
  const { towels, designs } = getInventory()

  const isPossible = createIsPossible(towels)
  const countPossibilities = createCountPossibilities(towels)

  return designs.filter(isPossible).map(countPossibilities).sum()
}
console.log('Number of possible designs:', getNumberOfAllPossibleDesigns())
