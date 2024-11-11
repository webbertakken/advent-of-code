import { readFileSync } from 'fs'
import { join } from 'path'

// Works for both Node and Bun
const dir = import.meta.dir || import.meta.dirname

const INPUT_PATH = join(dir, '../', 'input')

export default class Library {
  static getInput(dayName: string): string {
    return readFileSync(`${INPUT_PATH}/${dayName}.txt`).toString()
  }

  static getExampleInput(dayName: string): string {
    return readFileSync(`${INPUT_PATH}/${dayName}-example.txt`).toString()
  }
}
