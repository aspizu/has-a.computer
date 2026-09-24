import {useRef, useState} from "react"
import {RiArrowRightUpLine} from "@remixicon/react"
import type {OpenPanel} from "@/components/App"
import {DomainPeriod} from "@/components/domain-period"
import {HeroArtwork} from "@/components/hero-artwork"

export function Hero({onOpen}: {onOpen: OpenPanel}) {
  const [name, setName] = useState("")
  const submitButton = useRef<HTMLButtonElement>(null)

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
            if (submitButton.current) onOpen("claim", submitButton.current, name)
          }}
        >
          <div className="hero-domain-field">
            <input
              className="hero-input"
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
            <div className="hero-domain-suffix" id="hero-domain-suffix">
              <DomainPeriod />
              has-a
              <DomainPeriod />
              computer
            </div>
          </div>
          <button ref={submitButton} type="submit" className="hero-button hero-button-primary">
            Reserve subdomain <RiArrowRightUpLine size={15} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
