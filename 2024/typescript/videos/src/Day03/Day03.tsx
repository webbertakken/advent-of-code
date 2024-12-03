import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from 'remotion'
import { z } from 'zod'

import input from '../../../../input/day03.txt'

export const instructionsSchema = z.object({})

export const Day03: React.FC<z.infer<typeof instructionsSchema>> = ({}) => {
  const frame = useCurrentFrame()
  const { width } = useVideoConfig()

  const swipeInDuration = Math.round(width / 50)
  const mayStart = frame > swipeInDuration
  const scrollSpeed = 8

  return (
    <AbsoluteFill style={{ backgroundColor: '#282b36' }}>
      <Sequence name="title" from={0}>
        <h1 className="text-6xl pt-16 px-16 text-white">Day 3</h1>
      </Sequence>

      <Sequence name="analyse input" from={0}>
        <div
          className="pt-60 relative w-full h-1/3 overflow-hidden text-5xl"
          style={{
            left: Math.max(0, width - frame * 50),
          }}
        >
          <div className="absolute left-0 bg-[#282b36] w-16 h-16 z-20">&nbsp;</div>
          <div className="absolute right-0 bg-[#282b36] w-16 h-16 z-20">&nbsp;</div>
          <div className="absolute rounded-2xl border-8 border-gray-500 h-24 -mt-4 -ml-64 w-64 left-2/3 z-10">
            &nbsp;
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: input
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll(/mul\(\d+,\d+\)/g, (match) => `<span class="text-green-500">` + match + `</span>`),
            }}
            className="absolute w-2/3 overflow-x-clip text-nowrap z-10 text-blue-300"
            style={{
              left: mayStart ? width - (frame - swipeInDuration) * scrollSpeed : width,
              width: mayStart ? `calc(66.6% + ${(frame - swipeInDuration) * scrollSpeed - width}px)` : '66.6%',
            }}
          />
          <div
            className="absolute overflow-visible text-nowrap text-red-500"
            style={{ left: mayStart ? width - (frame - swipeInDuration) * scrollSpeed : width }}
          >
            {input}
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  )
}
