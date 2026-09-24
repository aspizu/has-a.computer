import {useLayoutEffect, useRef, useState} from "react"
import {RiArrowRightUpLine} from "@remixicon/react"
import type {OpenClaim} from "@/components/App"
import {DomainPeriod} from "@/components/domain-period"
import {HeroArtwork} from "@/components/hero-artwork"
import {Button} from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function Hero({onOpen}: {onOpen: OpenClaim}) {
  const [name, setName] = useState("")
  const [nameWidth, setNameWidth] = useState<number>()
  const nameSizer = useRef<HTMLSpanElement>(null)
  const submitButton = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const sizer = nameSizer.current
    if (!sizer) return

    const measure = () => setNameWidth(Math.ceil(sizer.getBoundingClientRect().width) + 1)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(sizer)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading">
        <span className="hero-line-intro">
          <span className="hero-word">give</span> <span className="hero-word">your</span>
        </span>
        <span className="hero-line-subject">
          <span className="hero-word">computer</span> <span className="hero-word">a</span>
        </span>
        <span className="hero-line-ending">
          <span className="hero-word">place</span> <span className="hero-word">online</span>
        </span>
      </h1>
      <HeroArtwork />
      <div className="hero-details">
        <p>
          A free address for your computer.
          <br />
          Bring your own hosting. We&apos;ll bring the name.
        </p>
        <form
          className="hero-actions"
          onSubmit={(event) => {
            event.preventDefault()
            if (submitButton.current) onOpen(submitButton.current, name)
          }}
        >
          <InputGroup className="hero-domain-field">
            <span ref={nameSizer} className="hero-input-sizer" aria-hidden="true">
              {name || "yourname"}
            </span>
            <InputGroupInput
              className="hero-input"
              style={{width: nameWidth}}
              type="text"
              name="subdomain"
              aria-label="Your subdomain"
              aria-describedby="hero-domain-suffix"
              placeholder="yourname"
              value={name}
              size={name.length || "yourname".length}
              onChange={(event) => setName(event.target.value.toLowerCase())}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              maxLength={63}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText className="hero-domain-suffix" id="hero-domain-suffix">
                <DomainPeriod />
                has-a
                <DomainPeriod />
                computer
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Button ref={submitButton} type="submit" className="hero-button">
            Reserve subdomain <RiArrowRightUpLine className="size-[15px]" aria-hidden="true" />
          </Button>
        </form>
      </div>
    </section>
  )
}
