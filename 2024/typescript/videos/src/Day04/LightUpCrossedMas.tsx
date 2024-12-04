import input from '../../../../input/day04.txt'
import { interpolateColors, useCurrentFrame, useVideoConfig } from 'remotion'

interface SpecialLetterProps {
  set: number
  isMiddle?: boolean
  children: string | JSX.Element
}

export function SpecialLetter({ set, isMiddle, children }: SpecialLetterProps) {
  const frame = useCurrentFrame()
  const glowColor = isMiddle ? 'rgb(255,0,0)' : 'rgb(255,255,0)'
  const color = interpolateColors(
    frame % 90,
    [0, 20, 70, 89],
    ['rgba(74,224,129,.6)', glowColor, glowColor, 'rgba(74,224,129,.6)'],
  )
  const currentSet = Math.floor(frame / 90) % 6
  return <span style={{ color: currentSet === set % 6 ? color : 'inherit' }}>{children}</span>
}

export function LightUpCrossedMas() {
  const scrollSpeed = 8

  const frame = useCurrentFrame()
  const { width } = useVideoConfig()

  const matrix: (JSX.Element | string)[][] = input.split('\n').map((line) => line.split(''))

  let set = 0
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] !== 'A') continue
      const half = ['SAM', 'MAS']
      if (!half.includes(`${matrix[y - 1]?.[x - 1]}${matrix[y][x]}${matrix[y + 1]?.[x + 1]}`)) continue
      if (!half.includes(`${matrix[y - 1]?.[x + 1]}${matrix[y][x]}${matrix[y + 1]?.[x - 1]}`)) continue
      matrix[y][x] = (
        <SpecialLetter set={set} isMiddle>
          {matrix[y][x]}
        </SpecialLetter>
      )
      matrix[y + 1][x + 1] = <SpecialLetter set={set}>{matrix[y + 1][x + 1]}</SpecialLetter>
      matrix[y - 1][x - 1] = <SpecialLetter set={set}>{matrix[y - 1][x - 1]}</SpecialLetter>
      matrix[y + 1][x - 1] = <SpecialLetter set={set}>{matrix[y + 1][x - 1]}</SpecialLetter>
      matrix[y - 1][x + 1] = <SpecialLetter set={set}>{matrix[y - 1][x + 1]}</SpecialLetter>
      ++set
    }
  }

  return (
    <div
      className="pt-60 relative w-full text-2xl mx-16 overflow-hidden font-mono text-green-500"
      style={{ left: Math.max(0, width - frame * scrollSpeed * 1.25) }}
    >
      {matrix.map((line, y) => (
        <div key={y} className="flex">
          {line.map((char, x) => (
            <div key={x}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
