import Library from './lib'

const parseInput = () => Library.getInput('day07').replace(/\$ /g, '').split('\n')

type Structure = { [key: string]: number }
export const getStructure = (input: string[]): Structure => {
  const structure: { [key: string]: number } = { '/': 0 }

  let path = '/'
  for (const line of input) {
    const [commandOrDirEnt, arg] = line.trim().split(' ')
    if (commandOrDirEnt === 'cd') {
      if (arg === '..') {
        path = path.indexOf('.') === -1 ? '/' : path.split('.').slice(0, -1).join('.')
      } else if (arg === '/') {
        path = '/'
      } else {
        path += `.${arg}`
      }
    } else if (commandOrDirEnt === 'dir') {
      if (structure[`${path}.${arg}`] === undefined) structure[`${path}.${arg}`] = 0
      continue
    } else if (commandOrDirEnt === 'ls') {
      continue
    }

    const fileSize = Number(commandOrDirEnt)
    if (!isNaN(fileSize)) structure[path] += fileSize
  }

  return structure
}

const getSize = (structure: Structure, key: string): number => {
  return Object.entries(structure).reduce((size, [key2, value2]) => {
    return key === key2 || key2.startsWith(`${key}.`) ? size + value2 : size
  }, 0)
}

// Part 1
export const getRecursiveSumOfDirsBelow100k = () => {
  const structure = getStructure(parseInput())

  return Object.entries(structure).reduce((size, [key]) => {
    const recursiveSize = getSize(structure, key)
    return recursiveSize <= 100_000 ? size + recursiveSize : size
  }, 0)
}
console.log('Sum size:', getRecursiveSumOfDirsBelow100k())

// Part 2
export const getSizeOfFolderToRemove = () => {
  const structure = getStructure(parseInput())
  const needToRemove = getSize(structure, '/') - 40_000_000

  return Object.entries(structure)
    .map(([key]) => getSize(structure, key))
    .sort((a, b) => a - b)
    .find((v) => v >= needToRemove)
}
console.log('Size of folder to delete:', getSizeOfFolderToRemove())
