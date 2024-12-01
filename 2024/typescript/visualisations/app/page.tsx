'use server'

import Image from 'next/image'

import { readFileSync } from 'fs'
import { Day01 } from '@/app/Day01'

const text = readFileSync('../../input/day01.txt', 'utf8')

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Day01 />
      </main>
    </div>
  )
}
