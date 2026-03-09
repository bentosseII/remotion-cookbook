export type DemoSeconds = number
export type DemoTargetId = string
export type DemoMouseButton = 'left' | 'right'
export type DemoPointerStyle = 'human' | 'direct' | 'precise' | 'casual' | 'trackpad-fast'
export type DemoTypingCadence =
  | 'human'
  | 'fast'
  | 'code'
  | 'terminal-human'
  | 'terminal-power-user'
  | 'editor-code'
  | 'chat-human'
  | 'paste'
export type DemoBackspaceCadence = 'human' | 'burst'
export type DemoStatePatch = Record<string, unknown>

export type DemoEventBase = {
  at: DemoSeconds
}

export type DemoMovePointerEvent = DemoEventBase & {
  type: 'move-pointer'
  target: DemoTargetId
  duration?: DemoSeconds
  style?: DemoPointerStyle
}

export type DemoHoverEvent = DemoEventBase & {
  type: 'hover'
  target: DemoTargetId
}

export type DemoClickEvent = DemoEventBase & {
  type: 'click'
  target: DemoTargetId
  button?: DemoMouseButton
  count?: 1 | 2
}

export type DemoFocusEvent = DemoEventBase & {
  type: 'focus'
  target: DemoTargetId
}

export type DemoTypeEvent = DemoEventBase & {
  type: 'type'
  target: DemoTargetId
  text: string
  cadence?: DemoTypingCadence
}

export type DemoPasteEvent = DemoEventBase & {
  type: 'paste'
  target: DemoTargetId
  text: string
}

export type DemoBackspaceEvent = DemoEventBase & {
  type: 'backspace'
  target: DemoTargetId
  count: number
  cadence?: DemoBackspaceCadence
}

export type DemoScrollEvent = DemoEventBase & {
  type: 'scroll'
  target: DemoTargetId
  deltaY: number
  duration?: DemoSeconds
  inertia?: boolean
}

export type DemoSelectTextEvent = DemoEventBase & {
  type: 'select-text'
  target: DemoTargetId
  start: number
  end: number
}

export type DemoStreamTextEvent = DemoEventBase & {
  type: 'stream-text'
  target: DemoTargetId
  chunks: readonly string[]
  chunkOffsets?: readonly DemoSeconds[]
}

export type DemoSetStateEvent = DemoEventBase & {
  type: 'set-state'
  patch: DemoStatePatch
}

export type DemoWaitEvent = DemoEventBase & {
  type: 'wait'
  duration: DemoSeconds
}

export type DemoEvent =
  | DemoMovePointerEvent
  | DemoHoverEvent
  | DemoClickEvent
  | DemoFocusEvent
  | DemoTypeEvent
  | DemoPasteEvent
  | DemoBackspaceEvent
  | DemoScrollEvent
  | DemoSelectTextEvent
  | DemoStreamTextEvent
  | DemoSetStateEvent
  | DemoWaitEvent

export type DemoScript = readonly DemoEvent[]

export type DemoTargetRect = {
  x: number
  y: number
  width: number
  height: number
}

export type DemoTarget = {
  id: DemoTargetId
  rect: DemoTargetRect
  meta?: Record<string, unknown>
}

export type DemoTargetMap = Record<DemoTargetId, DemoTarget>
