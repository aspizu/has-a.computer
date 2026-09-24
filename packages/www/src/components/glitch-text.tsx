import {useEffect, useState} from "react"

const GLITCH_CHARS = "!<>-_\\/[]{}=+*^?#"

export function GlitchText({
  words,
  interval = 2400,
  className,
}: {
  words: string[]
  interval?: number
  className?: string
}) {
  const [display, setDisplay] = useState(words[0] ?? "")

  useEffect(() => {
    let raf = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    let current = 0
    let disposed = false

    function scramble(from: string, to: string) {
      return new Promise<void>((resolve) => {
        const length = Math.max(from.length, to.length)
        const totalFrames = 22
        let frame = 0

        function step() {
          if (disposed) {
            resolve()
            return
          }
          frame += 1
          let out = ""
          for (let i = 0; i < length; i++) {
            const revealAt = ((i + 1) / length) * totalFrames
            if (frame >= revealAt) {
              out += to[i] ?? ""
            } else if (frame >= revealAt - 5) {
              out += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            } else {
              out += from[i] ?? ""
            }
          }
          setDisplay(out)
          if (frame < totalFrames) {
            raf = requestAnimationFrame(step)
          } else {
            resolve()
          }
        }

        raf = requestAnimationFrame(step)
      })
    }

    async function loop() {
      while (!disposed) {
        await new Promise<void>((resolve) => {
          timer = setTimeout(resolve, interval)
        })
        if (disposed) break
        const from = words[current] ?? ""
        current = (current + 1) % words.length
        await scramble(from, words[current] ?? "")
      }
    }

    void loop()

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      if (timer !== undefined) clearTimeout(timer)
    }
  }, [words, interval])

  return (
    <span className={className} aria-hidden>
      {display}
    </span>
  )
}
