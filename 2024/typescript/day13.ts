import Library from './lib'

type Machine = { aX: number; aY: number; bX: number; bY: number; prizeX: number; prizeY: number }

const A_COST = 3
const B_COST = 1

const getInput = (): Machine[] => {
  const template = /.*?(?<aX>\d+).*?(?<aY>\d+)\n.*?(?<bX>\d+).*?(?<bY>\d+)\n.*?(?<prizeX>\d+).*?(?<prizeY>\d+)/

  // Parse input into Machine objects
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
  const commonDenominator = aX * bY - aY * bX
  const denominatorA = prizeX * bY - prizeY * bX
  const denominatorB = aX * prizeY - aY * prizeX

  // There is no common denominator
  if (commonDenominator === 0) {
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

  // Determine steps for A and B
  const aSteps = denominatorA / commonDenominator
  const bSteps = denominatorB / commonDenominator

  // Check if a and b are integers and non-negative
  if (!Number.isInteger(aSteps) || !Number.isInteger(bSteps) || aSteps < 0 || bSteps < 0) return 0

  // Calculate the cost
  return aSteps * A_COST + bSteps * B_COST
}

// Part 1
export const getMinimumTokenCost = () => getInput().map(getMinimumCostToWinThePrize).sum()
console.log('Minimum cost to get all prizes:', getMinimumTokenCost())

//Part 2
export const getMinimumTokenCostAfterAddingTenTrillion = () => {
  const tenTrillion = 10 ** 13

  return getInput()
    .map((machine) => ({ ...machine, prizeX: machine.prizeX + tenTrillion, prizeY: machine.prizeY + tenTrillion }))
    .map(getMinimumCostToWinThePrize)
    .sum()
}
console.log('Minimum cost after moving prize by 10 trillion x and y:', getMinimumTokenCostAfterAddingTenTrillion())
