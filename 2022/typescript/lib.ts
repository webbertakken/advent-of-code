import { readFileSync } from "fs";
import { join } from "path";


// Works for both Node and Bun
const dir = __dirname ?? import.meta.dir;

const INPUT_PATH = join(dir, "../", "input");

export default class Library {
  static getInput(dayName: string): string {
    return readFileSync(`${INPUT_PATH}/${dayName}.txt`).toString();
  }

  static getTestInput(dayName: string): string {
    return readFileSync(`${INPUT_PATH}/${dayName}.txt`).toString();
  }

  static bench({ name, fn }: { fn: () => any }) {
    bench(name, fn as () => void);
  }
}
