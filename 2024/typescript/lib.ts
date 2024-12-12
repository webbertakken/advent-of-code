import { readFileSync } from 'fs'
import { join } from 'path'

// Works for both Node and Bun
const dir = import.meta.dir || import.meta.dirname

const INPUT_PATH = join(dir, '../', 'input')

declare global {
  interface Array<T extends number | bigint> {
    sum(): T
  }
}

Array.prototype.sum = function () {
  if (typeof this[0] === 'bigint') {
    return this.reduce((a: bigint, b: bigint) => a + b, 0n)
  } else {
    return this.reduce((a: number, b: number) => a + b, 0)
  }
}

export default class Library {
  static getInput(dayName: string): string {
    return readFileSync(`${INPUT_PATH}/${dayName}.txt`).toString()
  }

  static getExampleInput(dayName: string): string {
    return readFileSync(`${INPUT_PATH}/${dayName}-example.txt`).toString()
  }

  static getExample2Input(dayName: string): string {
    return readFileSync(`${INPUT_PATH}/${dayName}-example2.txt`).toString()
  }
}
