import { benchmark } from '../tests/testLib'
import { analiseSafetyAfterProblemDampener, analyseNumberOfSafeStrangeReports } from '../day02'

benchmark('day02 - part 1', analyseNumberOfSafeStrangeReports)
benchmark('day02 - part 2', analiseSafetyAfterProblemDampener)
