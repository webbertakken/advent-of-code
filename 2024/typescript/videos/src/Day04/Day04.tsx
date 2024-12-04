import { AbsoluteFill, Sequence } from 'remotion'
import { z } from 'zod'
import { LightUpCrossedMas } from './LightUpCrossedMas'

export const instructionsSchema = z.object({})

export const Day04: React.FC<z.infer<typeof instructionsSchema>> = ({}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#282b36' }}>
      <Sequence name="title" from={0}>
        <h1 className="text-6xl pt-16 px-16 text-white">Day 4</h1>
      </Sequence>

      <Sequence name="visualised puzzle" from={0}>
        <LightUpCrossedMas />
      </Sequence>
    </AbsoluteFill>
  )
}
