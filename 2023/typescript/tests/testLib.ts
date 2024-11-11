import { bench, BenchOptions } from 'vitest'

export const benchmark = (name: string | Function, fn?: () => Promise<any> | any, options?: BenchOptions) => {
  return bench(name, fn, options)
}
