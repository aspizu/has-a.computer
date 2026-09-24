import {useRef, useState} from "react"
import {Dialog} from "radix-ui"
import {RiCloseLine} from "@remixicon/react"
import {Architecture} from "@/components/architecture"
import {ClaimForm} from "@/components/claim-form"
import {Faq} from "@/components/faq"
import {Hero} from "@/components/hero"
import {Nav} from "@/components/nav"
import {useAnimatedTitle} from "@/hooks/use-animated-title"

export type Panel = "claim" | "about" | "faq"
export type OpenPanel = (panel: Panel, trigger: HTMLButtonElement, name?: string) => void

const titles: Record<Panel, string> = {
  claim: "Choose a subdomain",
  about: "How it works",
  faq: "Good to know",
}

export default function App() {
  useAnimatedTitle()
  const [panel, setPanel] = useState<Panel>("claim")
  const [open, setOpen] = useState(false)
  const [claimName, setClaimName] = useState("")
  const trigger = useRef<HTMLButtonElement | null>(null)

  const openPanel: OpenPanel = (nextPanel, button, name = "") => {
    trigger.current = button
    setPanel(nextPanel)
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
        <Nav onOpen={openPanel} />
        <main id="main">
          <Hero onOpen={openPanel} />
        </main>
        <footer className="site-footer">
          made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://aspiz.uk">aspizu</a>
        </footer>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content
            className={`site-dialog${panel === "about" ? " site-dialog-wide" : ""}`}
            aria-describedby={undefined}
            onCloseAutoFocus={(event) => {
              event.preventDefault()
              trigger.current?.focus()
            }}
          >
            <Dialog.Title className="sr-only">{titles[panel]}</Dialog.Title>
            <Dialog.Close className="dialog-close" aria-label="Close dialog">
              <RiCloseLine size={20} aria-hidden="true" />
            </Dialog.Close>
            {panel === "claim" && <ClaimForm key={claimName} initialName={claimName} />}
            {panel === "about" && <Architecture />}
            {panel === "faq" && <Faq />}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
