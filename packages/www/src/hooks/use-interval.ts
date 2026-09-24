import {useEffect, useEffectEvent} from "react"

export function useInterval(callback: () => void, delay: number) {
  const tick = useEffectEvent(callback)

  useEffect(() => {
    const timer = window.setInterval(() => tick(), delay)

    return () => window.clearInterval(timer)
  }, [delay])
}
