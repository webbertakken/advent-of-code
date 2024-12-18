import { benchmark } from '../tests/testLib'
import { getShortestPathAfterBytesHaveFallen, getByteThatClosesThePath } from '../day18'

benchmark('day18 - part 1', getShortestPathAfterBytesHaveFallen)
benchmark('day18 - part 2', getByteThatClosesThePath)
