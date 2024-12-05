import { benchmark } from '../tests/testLib'
import { getSumOfMiddlePageNumbersFromCorrectUpdates, getSumOfMiddlePageNumbersFromIncorrectUpdates } from '../day05'

benchmark('day05 - part 1', getSumOfMiddlePageNumbersFromCorrectUpdates)
benchmark('day05 - part 2', getSumOfMiddlePageNumbersFromIncorrectUpdates)
