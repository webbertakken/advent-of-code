import Library from './lib'

type Machine = { aX: number; aY: number; bX: number; bY: number; prizeX: number; prizeY: number }

const A_COST = 3
const B_COST = 1

const getInput = (): Machine[] => {
  const template = /.*?(?<aX>\d+).*?(?<aY>\d+)\n.*?(?<bX>\d+).*?(?<bY>\d+)\n.*?(?<prizeX>\d+).*?(?<prizeY>\d+)/

  return Library.getInput('day13')
    .split('\n\n')
    .map((m) => {
      const groups = m.match(template)!.groups!
      const machine: Machine = {} as Machine
      for (const key in groups) machine[key as keyof Machine] = Number(groups[key])
      return machine
    })
}

export function getMinimumCostToWinThePrize(machine: Machine): number {
  const { aX, aY, bX, bY, prizeX, prizeY } = machine

  // Cramer's rule
  const denominator = aX * bY - aY * bX
  const determinantA = prizeX * bY - prizeY * bX
  const determinantB = aX * prizeY - aY * prizeX

  // There is no common denominator
  if (denominator === 0) {
    // Check if it can be done with 1 button instead - performance diff is negligible
    const aStepsX = prizeX / aX
    const aStepsY = prizeY / aY

    const bStepsX = prizeX / bX
    const bStepsY = prizeY / bY

    const isValidA = aStepsX === aStepsY && Number.isInteger(aStepsX)
    const isValidB = bStepsX === bStepsY && Number.isInteger(bStepsX)

    if (isValidA && isValidB) return aStepsX * A_COST > bStepsX * B_COST ? bStepsX * B_COST : aStepsX * A_COST
    if (isValidA) return aStepsX * A_COST
    if (isValidB) return bStepsX * B_COST

    return 0
  }

  const aSteps = determinantA / denominator
  const bSteps = determinantB / denominator

  if (!Number.isInteger(aSteps) || !Number.isInteger(bSteps) || aSteps < 0 || bSteps < 0) return 0

  return aSteps * A_COST + bSteps * B_COST
}

// Part 1
export const getMinimumTokenCost = () => getInput().map(getMinimumCostToWinThePrize).sum()
console.log('Minimum cost to get all prizes:', getMinimumTokenCost())

//Part 2
export const getMinimumTokenCostAfterAddingTenTrillion = () => {
  const TEN_TRILLION = 10 ** 13

  return getInput()
    .map((machine) => ({ ...machine, prizeX: machine.prizeX + TEN_TRILLION, prizeY: machine.prizeY + TEN_TRILLION }))
    .map(getMinimumCostToWinThePrize)
    .sum()
}
console.log('Minimum cost after moving prize by 10 trillion x and y:', getMinimumTokenCostAfterAddingTenTrillion())
