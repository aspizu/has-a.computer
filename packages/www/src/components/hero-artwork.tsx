import {RiGlobalLine, RiSearchLine} from "@remixicon/react"
import {DomainPeriod} from "@/components/domain-period"

const names = ["homelab", "maya", "my-server", "studio", "alex", "side-project"]

export function HeroArtwork() {
  return (
    <>
      <div className="computer-layer">
        <img
          src="/images/retro-computer.png"
          alt="A floating retro computer with a smiling blue screen"
          width="1254"
          height="1254"
          fetchPriority="high"
          draggable={false}
        />
      </div>
      <div className="domain-cloud" role="group" aria-label="Example subdomains">
        {names.map((name, index) => (
          <div className={`domain-hitbox domain-${index + 1}`} key={name}>
            <div className="floating-domain">
              <RiGlobalLine className="domain-globe" size={16} aria-hidden="true" />
              <div className="domain-address">
                <b>{name}</b>
                <DomainPeriod />
                <span>has-a</span>
                <DomainPeriod />
                <span>computer</span>
                <span className="domain-caret" aria-hidden="true" />
              </div>
              <RiSearchLine className="domain-search" size={16} aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
