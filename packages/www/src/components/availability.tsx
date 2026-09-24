import {RiArrowRightLine, RiCheckLine, RiCursorLine, RiGlobalLine} from "@remixicon/react"
import {SectionLabel} from "@/components/section-label"

export function Availability() {
  return (
    <section className="availability-section section-border">
      <div className="availability-copy">
        <SectionLabel id="03" title="Make it yours" />
        <h2>
          A name for what
          <br />
          <span>you&apos;re working on.</span>
        </h2>
        <p>
          Your home server, your latest experiment, or your personal site. Give it an address that
          feels like yours.
        </p>
        <a className="text-link" href="#claim">
          Find your name <RiArrowRightLine size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="domain-preview">
        <div className="preview-heading">
          <RiGlobalLine size={16} aria-hidden="true" />
          <span>Your next project</span>
          <span className="preview-tag">PREVIEW</span>
        </div>
        <div className="preview-address">
          <span>homelab</span>.has-a.computer
          <RiCursorLine className="preview-cursor" size={27} aria-hidden="true" />
        </div>
        <div className="preview-caption">
          <RiCheckLine size={15} aria-hidden="true" /> A little more personal than an IP address.
        </div>
        <div className="preview-examples">
          <span>portfolio</span>
          <span>side-project</span>
          <span>my-server</span>
        </div>
      </div>
    </section>
  )
}
