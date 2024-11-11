import Library from './lib'

const getInput = () => Library.getInput('day08')

// Part 1
export const getVisibleTrees = () => {
  const lines = getInput().split('\n')
  const count = lines.length * lines[0].length

  let invisibleCount = 0
  for (let i = 1; i < lines.length - 1; i++) {
    const line = lines[i]
    for (let j = 1; j < line.length - 1; j++) {
      const surrounding = [
        line.split('').slice(0, j),
        line.split('').slice(j + 1),
        lines.slice(0, i).map((line) => line[j]),
        lines.slice(i + 1).map((line) => line[j]),
      ]

      if (!surrounding.some((direction) => direction.every((tree) => tree < line[j]))) {
        invisibleCount++
      }
    }
  }

  return count - invisibleCount
}
console.log('Visible trees:', getVisibleTrees())

// Part 2
export const getHighestViewScore = () => {
  const lines = getInput().split('\n')

  let maxScore = 0
  for (let i = 1; i < lines.length - 1; i++) {
    const line = lines[i]
    for (let j = 1; j < line.length - 1; j++) {
      const surrounding = [
        line.split('').slice(0, j).reverse(),
        line.split('').slice(j + 1),
        lines
          .slice(0, i)
          .map((line) => line[j])
          .reverse(),
        lines.slice(i + 1).map((line) => line[j]),
      ]

      maxScore = Math.max(
        maxScore,
        surrounding
          .map((direction) => {
            let los = 0
            for (const tree of direction) {
              los += 1
              if (tree >= line[j]) break
            }
            return los
          })
          .reduce((multiplier, los) => multiplier * los, 1),
      )
    }
  }

  return maxScore
}
console.log('Highest view score:', getHighestViewScore())
