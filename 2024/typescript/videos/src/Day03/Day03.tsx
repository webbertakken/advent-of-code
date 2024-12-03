import { AbsoluteFill, Sequence } from 'remotion'
import { z } from 'zod'

import { ScanForInstructions } from './ScanForInstructions'
import { BreakDownInstruction } from './BreakDownInstruction'

export const instructionsSchema = z.object({})

export const Day03: React.FC<z.infer<typeof instructionsSchema>> = ({}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#282b36' }}>
      <Sequence name="title" from={0}>
        <h1 className="text-6xl pt-16 px-16 text-white">Day 3</h1>
      </Sequence>

      <Sequence name="analyse input" from={0}>
        <ScanForInstructions />
      </Sequence>

      <Sequence name="multiplying" from={300}>
        <BreakDownInstruction />
      </Sequence>
    </AbsoluteFill>
  )
}
