import * as path from "https://deno.land/std@0.167.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const INPUT_PATH = path.dirname(__dirname) + "/input";

export default class Library {
  static getInput(dayName: string): string {
    return Deno.readTextFileSync(`${INPUT_PATH}/${dayName}.txt`);
  }
}
