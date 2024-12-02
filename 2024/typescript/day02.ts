import Library from './lib'

type Mode = 'inc' | 'dec' | null

const SAFE = 1
const UNSAFE = 0

const getInput = () => Library.getInput('day02').split('\n')

const checkReportSafety = (report: number[]) => {
  let mode: Mode = null

  for (let i = 0, j = 1; j < report.length; i++, j++) {
    if (report[i] === report[j]) return UNSAFE
    if (Math.abs(report[i] - report[j]) > 3) return UNSAFE
    if (mode === null) mode = report[i] > report[j] ? 'dec' : 'inc'
    else if (mode === 'dec' && report[i] < report[j]) return UNSAFE
    else if (mode === 'inc' && report[i] > report[j]) return UNSAFE
  }

  return SAFE
}

// Part 1
export const analyseNumberOfSafeStrangeReports = () => {
  return getInput()
    .map((line) => checkReportSafety(line.split(/\s/).map(Number)))
    .filter(Boolean).length
}
console.log('Safe amount of strange reports:', analyseNumberOfSafeStrangeReports())

// Part 2
export const analiseSafetyAfterProblemDampener = () => {
  return getInput()
    .map((line) => {
      const report = line.split(/\s/).map(Number)
      for (let i = 0; i < report.length; i++) {
        if (checkReportSafety(report.toSpliced(i, 1))) return SAFE
      }
    })
    .filter(Boolean).length
}
console.log('Part 2:', analiseSafetyAfterProblemDampener())
