import {type DemoTarget, type DemoTargetId, type DemoTargetMap} from './types'

export const createDemoTargetMap = (targets: readonly DemoTarget[]): DemoTargetMap => {
  return targets.reduce<DemoTargetMap>((targetMap, target) => {
    if (targetMap[target.id]) {
      throw new Error(`Duplicate demo target id: ${target.id}`)
    }

    targetMap[target.id] = target
    return targetMap
  }, {})
}

export const getDemoTarget = (
  targetMap: DemoTargetMap,
  targetId: DemoTargetId,
): DemoTarget | null => {
  return targetMap[targetId] ?? null
}
