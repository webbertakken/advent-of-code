import Library from './lib'

const getInput = () => Library.getInput('day02').split('\n')

const checkReportSafety = (report: number[]) => {
  let mode = null

  for (let i = 0, j = 1; j < report.length; i++, j++) {
    if (report[i] === report[j]) return 0
    if (Math.abs(report[i] - report[j]) > 3) return 0
    if (mode === null) mode = report[i] > report[j] ? 'dec' : 'inc'
    else if (mode === 'dec' && report[i] < report[j]) return 0
    else if (mode === 'inc' && report[i] > report[j]) return 0
  }

  return 1
}

// Part 1
export const analyseNumberOfSafeStrangeReports = () => {
  return getInput()
    .map((line) => checkReportSafety(line.split(/\s/).map(Number)))
    .filter(Boolean).length
}
console.log('Safe amount of strange reports:', analyseNumberOfSafeStrangeReports())

// Part 2
export const analiseSafetyAfterAfterProblemDampener = () => {
  return getInput()
    .map((line) => {
      const report = line.split(/\s/).map(Number)
      for (let i = 0; i < report.length; i++) {
        if (checkReportSafety(report.toSpliced(i, 1))) return 1
      }
    })
    .filter(Boolean).length
}
console.log('Part 2:', analiseSafetyAfterAfterProblemDampener())
