import { parseArgs } from 'util'
import { readFileSync, writeFileSync } from 'fs'

// Parse args
const args = typeof Bun !== 'undefined' ? Bun.argv : process.argv.slice(2)
const { values, positionals } = parseArgs({
  args,
  options: {
    day: { type: 'string' },
    wasm: { type: 'boolean' },
  },
  strict: true,
  allowPositionals: true,
})

// Bail out if the input is invalid
const reportInvalidInput = (message: string) => {
  console.warn(message)
  process.exit(1)
}

// Validations
const day = values.day ? values.day.padStart(2, '0') : positionals[2]?.padStart(2, '0') || undefined
if (!day || day.length !== 2 || Number(day) < 1 || Number(day) > 25) {
  reportInvalidInput('Invalid day. Must be a number between 1 and 25.\n\nUsage:\n  `bun new --day=XX`\n  `yarn new XX`')
}

const wasm = values.wasm || positionals[3] === '--wasm' || false

// Create files
const dayFile = readFileSync('scripts/templates/dayXX.ts', 'utf-8')
writeFileSync(`./day${day}.ts`, dayFile.replace(/XX/g, `${day}`))

const testFile = readFileSync('scripts/templates/tests/dayXX.test.ts', 'utf-8')
writeFileSync(`./tests/day${day}.test.ts`, testFile.replace(/XX/g, `${day}`))

const benchmarkFile = readFileSync('scripts/templates/benchmarks/dayXX.bench.ts', 'utf-8')
writeFileSync(`./benchmarks/day${day}.bench.ts`, benchmarkFile.replace(/XX/g, `${day}`))

const inputFile = readFileSync('../input/dayXX.txt', 'utf-8')
writeFileSync(`../input/day${day}.txt`, inputFile.replace(/XX/g, `${day}`))

const inputExampleFile = readFileSync('../input/dayXX-example.txt', 'utf-8')
writeFileSync(`../input/day${day}-example.txt`, inputExampleFile.replace(/XX/g, `${day}`))

if (wasm) {
  const wasmFile = readFileSync('scripts/templates/dayXX-wasm.ts', 'utf-8')
  writeFileSync(`./day${day}-wasm.ts`, wasmFile.replace(/XX/g, `${day}`).replace('// @ts-expect-error\n', ''))

  const wasmTestFile = readFileSync('scripts/templates/tests/dayXX-wasm.test.ts', 'utf-8')
  writeFileSync(`./tests/day${day}-wasm.test.ts`, wasmTestFile.replace(/XX/g, `${day}`))

  const wasmBenchmarkFile = readFileSync('scripts/templates/benchmarks/dayXX-wasm.bench.ts', 'utf-8')
  writeFileSync(`./benchmarks/day${day}-wasm.bench.ts`, wasmBenchmarkFile.replace(/XX/g, `${day}`))
}

console.log(`Files for day ${day} created.`)
