'use client'

// @ts-ignore
import data from '../../../input/day01.txt'

import { VictoryBar, VictoryBoxPlot, VictoryChart, VictoryScatter, VictoryTheme, VictoryTooltip } from 'victory'

export const getLists = (data: string) => {
  const lists: { [key: string]: number[] } = { left: [], right: [] }

  for (const [a, b] of data.split('\n').map((line) => line.split(/\s+/).map(Number))) {
    lists.left.push(a)
    lists.right.push(b)
  }

  return [lists.left, lists.right]
}

export function Day01() {
  const [left, right] = getLists(data)

  // Count the number of times each number appears in list B
  const rightNumberCounts = new Map<number, number>()
  for (const number of right) {
    rightNumberCounts.set(number, (rightNumberCounts.get(number) ?? 0) + 1)
  }

  const rightCountsData: { x: number; y: number }[] = []
  rightNumberCounts.forEach((value, key) => {
    rightCountsData.push({ x: key, y: value })
  })

  // Same for left number counts
  const leftNumberCounts = new Map<number, number>()
  for (const number of left) {
    leftNumberCounts.set(number, (leftNumberCounts.get(number) ?? 0) + 1)
  }

  const leftCountsData: { x: number; y: number }[] = []
  leftNumberCounts.forEach((value, key) => {
    leftCountsData.push({ x: key, y: value })
  })

  return (
    <div>
      <h1 className="text-5xl pb-4">Day 1</h1>
      <h2 className="text-2xl">Legend</h2>
      <ul className="list-disc list-inside text-xl p-4">
        <li className="text-[orange]">Left</li>
        <li className="text-[lightgreen]">Right</li>
      </ul>
      <h2 className="text-2xl">Number distribution from left and right list.</h2>
      <p>A quick view of how the numbers are distributed</p>
      <VictoryChart domainPadding={25} width={400} height={250} theme={VictoryTheme.clean}>
        <VictoryBoxPlot
          labels
          labelComponent={<VictoryTooltip />}
          horizontal
          data={[{ x: 'right', y: [...right] }]}
          style={{
            min: { stroke: 'mediumseagreen' },
            max: { stroke: 'lightgreen' },
            q1: { fill: 'mediumseagreen' },
            q3: { fill: 'lightgreen' },
            median: {
              stroke: 'white',
              strokeWidth: 2,
            },
            minLabels: { fill: 'mediumseagreen' },
            maxLabels: { fill: 'lightgreen' },
          }}
        />

        <VictoryBoxPlot
          labels
          labelComponent={<VictoryTooltip />}
          horizontal
          data={[{ x: 'left', y: [...left] }]}
          style={{
            min: { stroke: 'tomato' },
            max: { stroke: 'orange' },
            q1: { fill: 'tomato' },
            q3: { fill: 'orange' },
            median: {
              stroke: 'white',
              strokeWidth: 2,
            },
            minLabels: { fill: 'tomato' },
            maxLabels: { fill: 'orange' },
          }}
        />
      </VictoryChart>
      <h2 className="text-2xl">Distribution</h2>
      <p>
        Not a very useful chart, but it shows the distribution per 25 numbers. Lightgreen is the left list, orange is
        the right list.
      </p>
      <VictoryChart domainPadding={10} theme={VictoryTheme.clean} width={500} height={250}>
        <VictoryScatter
          bubbleProperty="y"
          style={{ data: { fill: 'lightgreen' } }}
          maxBubbleSize={2.5}
          minBubbleSize={0.5}
          data={leftCountsData.map((data, index) => ({ x: Math.round(index / 25), y: data.x, count: data.y }))}
        />
        <VictoryScatter
          bubbleProperty="y"
          maxBubbleSize={2.5}
          minBubbleSize={0.5}
          style={{ data: { fill: 'orange' } }}
          data={right.map((y, index) => ({ x: Math.round(index / 25), y }))}
        />
      </VictoryChart>
      <h2 className="text-2xl">Which number is used the most?</h2>
      We can see that left (lightgreen) uses each number exactly once. Right (orange) uses some numbers multiple times.
      <VictoryChart theme={VictoryTheme.clean} width={500} domainPadding={{ x: 50 }}>
        <VictoryBar data={leftCountsData} style={{ data: { fill: 'rgba(144, 238, 144, 0.5)' } }} />
        <VictoryBar data={rightCountsData} style={{ data: { fill: 'rgba(255, 165, 0, 0.5)' } }} />
      </VictoryChart>
    </div>
  )
}
