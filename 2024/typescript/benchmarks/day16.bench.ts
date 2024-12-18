import { benchmark } from '../tests/testLib'
import { part1, part2 } from '../day16'
import { vi } from 'vitest'
import Library from '../lib'

benchmark('day16 - part 1', part1)
benchmark('day16 - part 2', () => {
  // Using example2 input for part 2, because it's very slow with the real input
  const getInput = vi.spyOn(Library, 'getInput').mockImplementation(Library.getExample2Input)
  part2()
  getInput.mockRestore()
})
