import {useRef, useState} from "react"
import {ClaimForm} from "@/components/claim-form"
import {Hero} from "@/components/hero"
import {Nav} from "@/components/nav"
import {Dialog, DialogContent} from "@/components/ui/dialog"
import {useAnimatedTitle} from "@/hooks/use-animated-title"

export type OpenClaim = (trigger: HTMLButtonElement, name?: string) => void

export default function App() {
  useAnimatedTitle()
  const [open, setOpen] = useState(false)
  const [claimName, setClaimName] = useState("")
  const trigger = useRef<HTMLButtonElement | null>(null)

  const openClaim: OpenClaim = (button, name = "") => {
    trigger.current = button
    setClaimName(name)
    setOpen(true)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="sky-scene">
        <img
          className="sky-background"
          src="/images/sky-background.png"
          alt=""
          aria-hidden="true"
          width="1586"
          height="992"
          fetchPriority="high"
        />
        <Nav onOpen={openClaim} />
        <main id="main">
          <Hero onOpen={openClaim} />
        </main>
        <footer className="site-footer">
          made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://aspiz.uk">aspizu</a>
        </footer>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onCloseAutoFocus={(event) => {
            event.preventDefault()
            trigger.current?.focus()
          }}
        >
          <ClaimForm key={claimName} initialName={claimName} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
