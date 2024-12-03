import { useCurrentFrame } from 'remotion'
import input from '../../../../input/day03.txt'

export function BreakDownInstruction() {
  const frame = useCurrentFrame()
  const opacity = Math.min(1, frame / 60)

  const instructionNo = Math.floor(frame / 120)
  const instructions = input.match(/mul\(\d+,\d+\)/g) || []
  const text = instructions[instructionNo]

  // @ts-ignore
  const { left, right } = text.match(/mul\((?<left>\d+),(?<right>\d+)\)/).groups

  return (
    <>
      <div className="absolute w-full pt-96 px-16 text-6xl text-green-500 font-mono" style={{ opacity }}>
        <div className="w-full flex flex-row pl-40" style={{ gap: frame % 60, opacity: frame % 120 < 60 ? 1 : 0 }}>
          <div>mul(</div>
          <div>{left}</div>
          <div>,</div>
          <div>{right}</div>
          <div>)</div>
        </div>
      </div>

      <div className="absolute w-full pt-96 px-16 text-6xl text-green-500 font-mono" style={{ opacity }}>
        <div
          className="w-full flex flex-row pl-[278px]"
          style={{ gap: 16 + 59, opacity: frame % 120 >= 60 ? 1 : 0, marginTop: ((frame % 120) - 60) * 2 }}
        >
          <div></div>
          <div>{left}</div>
          <div style={{ opacity: Math.max(0, (frame % 120) - 60) / 60 }}>×</div>
          <div>{right}</div>
          <div style={{ opacity: Math.max(0, (frame % 120) - 60) / 60 }}>=</div>
          <div style={{ opacity: Math.max(0, (frame % 120) - 60) / 60 }}>{left * right}</div>
        </div>
      </div>
    </>
  )
}
