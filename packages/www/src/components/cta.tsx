import {RiArrowRightLine, RiTerminalBoxLine} from "@remixicon/react"

export function Cta() {
  return (
    <section className="cta-section section-border">
      <div className="cta-grid" aria-hidden="true" />
      <div className="cta-content">
        <span className="cta-icon">
          <RiTerminalBoxLine size={24} aria-hidden="true" />
        </span>
        <h2>
          Have a computer?
          <br />
          <span>Give it an address.</span>
        </h2>
        <p>Your next project deserves its own little corner of the web.</p>
        <a className="action" href="#claim">
          Find your subdomain <RiArrowRightLine size={16} aria-hidden="true" />
        </a>
        <span className="cta-footnote">On your machine. Under your name.</span>
      </div>
    </section>
  )
}
