import {useEffect, useRef, useState} from "react"
import {RiCheckLine, RiFileCopyLine} from "@remixicon/react"

export function CopyButton({text, label}: {text: string; label?: string}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle")
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setStatus("copied")
    } catch {
      setStatus("error")
    }
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus("idle"), 2000)
  }

  const feedback =
    status === "copied" ? "Copied" : status === "error" ? "Could not copy" : (label ?? "Copy")
  return (
    <span className="copy-control">
      <button
        className="copy-button"
        type="button"
        onClick={copy}
        aria-label={`${feedback}: ${text}`}
        title={feedback}
      >
        {status === "copied" ? (
          <RiCheckLine size={15} aria-hidden="true" />
        ) : (
          <RiFileCopyLine size={15} aria-hidden="true" />
        )}
        {label ? <span>{feedback}</span> : null}
      </button>
      <span className="sr-only" role="status">
        {status === "idle" ? "" : feedback}
      </span>
      {status === "error" && (
        <span className="copy-error" role="alert">
          Copy failed. Select the text to copy it.
        </span>
      )}
    </span>
  )
}
