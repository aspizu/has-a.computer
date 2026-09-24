import {useEffect} from "react"

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
const GLITCH_CHARACTERS = "01_-/\\[]{}<>"
const INITIAL_DELAY = 5000
const HOLD_DURATION = 7000
const SWIPE_DURATION = 1500
const FRAME_INTERVAL = 75

export function useAnimatedTitle() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer = 0
    let currentWord = ""

    function cycleWord() {
      const choices = WORDS.filter((word) => word !== currentWord)
      const nextWord = choices[Math.floor(Math.random() * choices.length)]
      const length = Math.max(currentWord.length, nextWord.length)
      const startedAt = performance.now()

      function step() {
        const progress = Math.min((performance.now() - startedAt) / SWIPE_DURATION, 1)

        if (reducedMotion.matches || progress === 1) {
          currentWord = nextWord
          document.title = `${nextWord}.${BASE_TITLE}`
          timer = window.setTimeout(cycleWord, HOLD_DURATION)
          return
        }

        // A narrow band of scrambled characters sweeps across the prefix.
        const edge = progress * (length + 3)
        let prefix = ""

        for (let index = 0; index < length; index++) {
          if (edge >= index + 3) {
            prefix += nextWord[index] ?? ""
          } else if (edge > index) {
            prefix += GLITCH_CHARACTERS[Math.floor(Math.random() * GLITCH_CHARACTERS.length)]
          } else {
            prefix += currentWord[index] ?? ""
          }
        }

        document.title = prefix ? `${prefix}.${BASE_TITLE}` : BASE_TITLE
        timer = window.setTimeout(step, FRAME_INTERVAL)
      }

      step()
    }

    document.title = BASE_TITLE
    timer = window.setTimeout(cycleWord, INITIAL_DELAY)

    return () => {
      window.clearTimeout(timer)
      document.title = BASE_TITLE
    }
  }, [])
}
