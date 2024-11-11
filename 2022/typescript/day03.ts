import Library from './lib'

const getRucksacks = () => Library.getInput('day03').split('\n')

// Part 1
export const prioritySum = () => {
  return getRucksacks()
    .map((rucksack) => {
      const lhs = rucksack.slice(0, rucksack.length / 2)
      const rhs = rucksack.slice(rucksack.length / 2)

      const matcher = new RegExp(`[${lhs}]`, 'g')
      const match = rhs.match(matcher)![0]
      const code = match.charCodeAt(0)

      return code >= 97 ? code - 96 : code - 38
    })
    .reduce((acc, cur) => acc + cur, 0)
}
console.log('Sum of priorities:', prioritySum())

// Part 2
export const badgesSum = () => {
  let badgesSum = 0
  const add = (code: number) => (badgesSum += code >= 97 ? code - 96 : code - 38)

  let index = -1
  let regex
  for (const rucksack of getRucksacks()) {
    index = (index + 1) % 3
    if (index == 0) regex = rucksack
    regex = Array.from(new Set(rucksack.match(new RegExp(`[${regex}]`, 'g')))).join('')
    if (index == 2) add(regex.charCodeAt(0))
  }

  return badgesSum
}

console.log('Sum of badges:', badgesSum())
