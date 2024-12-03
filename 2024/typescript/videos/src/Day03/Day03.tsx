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
            left: Math.max(0, width - frame * scrollSpeed * 1.25),
          }}
        >
          <div className="absolute left-0 w-8 h-24 -mt-2 z-20 bg-[rgb(40,43,54)]" />
          <div className="absolute left-8 w-24 h-24 -mt-2 z-20 bg-gradient-to-r from-[rgba(40,43,54,1)] to-[rgba(40,43,54,0)]" />
          <div className="absolute right-0 w-8 h-24 -mt-2 z-20 bg-[rgb(40,43,54)]" />
          <div className="absolute right-8 w-24 h-24 -mt-2 z-20  bg-gradient-to-l from-[rgba(40,43,54,1)] to-[rgba(40,43,54,0)]" />
          <div className="absolute rounded-2xl border-gray-500 border-r-8 border-y-8 border-l-0 bg-gradient-to-r from-[rgba(40,43,54,.0)] to-[rgba(17,24,39,.7)]  h-24 -mt-2 -ml-64 w-64 left-2/3 z-20 pointer-events-none" />
          <div
            dangerouslySetInnerHTML={{
              __html: input
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll(/mul\(\d+,\d+\)/g, (match) => `<span class="text-green-500">` + match + `</span>`),
            }}
            className="absolute w-2/3 overflow-x-clip text-nowrap z-10 text-blue-300 border-[rgba(12,12,12,.2)] border-y-8 bg-[#282b36] h-20"
            style={{
              left: mayStart ? width - (frame - swipeInDuration) * scrollSpeed : width,
              width: mayStart ? `calc(66.6% + ${(frame - swipeInDuration) * scrollSpeed - width}px)` : '66.6%',
            }}
          />
          <div
            className="absolute overflow-visible text-nowrap text-red-500 text-opacity-60 border-[rgba(12,16,24,.5)] border-y-8 bg-gradient-to-l from-[rgba(17,24,39,1)] to-[rgba(17,24,39,.8)] h-20"
            style={{ left: mayStart ? width - (frame - swipeInDuration) * scrollSpeed : width }}
          >
            {input}
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  )
}
