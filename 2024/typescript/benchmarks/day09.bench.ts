import { benchmark } from '../tests/testLib'
import { getChecksumAfterDefragmentingPerBit, getChecksumAfterDefragmentingPerFile } from '../day09'

benchmark('day09 - part 1', getChecksumAfterDefragmentingPerBit)
benchmark('day09 - part 2', getChecksumAfterDefragmentingPerFile)
