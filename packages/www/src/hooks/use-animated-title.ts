import {useRef} from "react"
import {useInterval} from "@/hooks/use-interval"

const BASE_TITLE = "has-a.computer"
const WORDS = [
  "alex",
  "maya",
  "pixel",
  "homelab",
  "orbit",
  "studio",
  "byte",
  "nova",
  "hello",
  "echo",
]
const INITIAL_DELAY = 3000
const HOLD_DURATION = 3000
const SWIPE_DURATION = 2000
const FRAME_INTERVAL = 75
const GLITCH_CHARACTERS = "01_-/\\[]{}<>"
const SWEEP_WIDTH = 3

function getAnimatedTitle(t: number, from: string, to: string): string {
  const progress = Math.max(0, Math.min(t / SWIPE_DURATION, 1))
  const length = Math.max(from.length, to.length)
  const edge = progress * (length + SWEEP_WIDTH)
  const frame = Math.floor(Math.max(0, t) / FRAME_INTERVAL)
  let prefix = ""

  for (let index = 0; index < length; index++) {
    if (edge >= index + SWEEP_WIDTH) {
      prefix += to[index] ?? ""
    } else if (edge > index) {
      prefix += GLITCH_CHARACTERS[(frame + index) % GLITCH_CHARACTERS.length]
    } else {
      prefix += from[index] ?? ""
    }
  }

  return prefix ? `${prefix}.${BASE_TITLE}` : BASE_TITLE
}

export function useAnimatedTitle() {
  const animation = useRef({from: "", to: "", startsAt: INITIAL_DELAY})
  const startedAt = useRef<number | null>(null)

  useInterval(() => {
    const now = performance.now()
    startedAt.current ??= now
    const t = now - startedAt.current
    const state = animation.current
    if (t < state.startsAt) return

    if (!state.to) {
      const choices = WORDS.filter((word) => word !== state.from)
      state.to = choices[Math.floor(Math.random() * choices.length)]
      state.startsAt = t
    }

    const elapsed = t - state.startsAt
    document.title = getAnimatedTitle(elapsed, state.from, state.to)

    if (elapsed >= SWIPE_DURATION) {
      state.from = state.to
      state.to = ""
      state.startsAt = t + HOLD_DURATION
    }
  }, FRAME_INTERVAL)
}
