import Library from './lib'

const getInput = (): [bigint, bigint, bigint, number[]] => {
  const matcher = /.*A: (\d+)\n.*B: (\d+)\n.*C: (\d+)\n\nProgram: ((?:\d+,?)+)/
  const matches = Library.getInput('day17').match(matcher)!
  const instructions = matches.pop()!.split(',').map(Number)
  const [a, b, c] = matches.slice(1).map(BigInt)

  return [a, b, c, instructions]
}

function runProgram(a: bigint, b: bigint, c: bigint, instructions: number[]): number[] {
  const register = { a, b, c }

  const getCombo = (operand: number): bigint => {
    if (operand === 4) return register.a
    if (operand === 5) return register.b
    if (operand === 6) return register.c
    if (operand >= 7) throw new Error('Invalid operand')
    return BigInt(operand)
  }

  const adv = (operand: number) => (register.a = BigInt(register.a) / 2n ** getCombo(operand) / 1n)
  const bxl = (operand: number) => (register.b ^= BigInt(operand))
  const bst = (operand: number) => (register.b = BigInt(getCombo(operand)) % 8n)
  const bxc = (operand: number) => (register.b ^= register.c)
  const out = (operand: number) => output.push(Number(getCombo(operand) % 8n))
  const bdv = (operand: number) => (register.b = BigInt(register.a) / 2n ** BigInt(getCombo(operand)) / 1n)
  const cdv = (operand: number) => (register.c = BigInt(register.a) / 2n ** BigInt(getCombo(operand)) / 1n)

  const output: number[] = []
  for (let i = 0; i < instructions.length; i += 2) {
    const opcode = instructions[i]
    const operand = instructions[i + 1]

    const jnz = (operand: number) => (register.a !== 0n ? (i = operand - 2) : undefined)

    if (opcode === 0) adv(operand)
    if (opcode === 1) bxl(operand)
    if (opcode === 2) bst(operand)
    if (opcode === 3) jnz(operand)
    if (opcode === 4) bxc(operand)
    if (opcode === 5) out(operand)
    if (opcode === 6) bdv(operand)
    if (opcode === 7) cdv(operand)
  }

  return output
}

function getFixedPoint(a: bigint, b: bigint, c: bigint, instructions: number[]): bigint {
  const startNumber = a.toString()
  const expectedLength = instructions.length

  const getMatches = (expected: number[], result: number[]): number => {
    let matches = 0
    for (const i of Array(expectedLength).keys()) {
      if (expected[expected.length - 1 - i] !== result[result.length - 1 - i]) break
      matches++
    }

    return matches
  }

  const bestStrings = [startNumber]
  for (let i = 0; i < startNumber.length; i++) {
    const numbersWithPotential: string[] = []
    for (const currentBestString of bestStrings) {
      for (let j = 0; j <= 9; j++) {
        const number = currentBestString.slice(0, i) + j + currentBestString.slice(i + 1)

        const program = runProgram(BigInt(number), b, c, instructions)
        const matches = getMatches(instructions, program)

        if (matches === expectedLength && program.length === expectedLength) return BigInt(number)
        if (matches >= i + 1) numbersWithPotential.push(number)
      }
    }

    bestStrings.length = 0
    bestStrings.push(...numbersWithPotential)
    numbersWithPotential.length = 0
  }

  return -1n
}

// Part 1
export const getProgramStringOutput = () => runProgram(...getInput()).join(',')
console.log('Part 1:', getProgramStringOutput())

// Part 2
export const findInstructionFixedPoint = (): number => {
  const [, b, c, instructions] = getInput()

  // Can be sped up 5x by simply using 10n ** 13n, but this works for all instructions
  for (let a = 10n; a < 10 ** 53; a *= 10n) {
    const result = getFixedPoint(a, b, c, instructions)
    if (result !== -1n) return Number(result)
  }

  return -1
}
console.log('part 2:', findInstructionFixedPoint())
