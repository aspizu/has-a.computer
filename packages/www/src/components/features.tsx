import {
  RiArrowRightUpLine,
  RiCodeSSlashLine,
  RiGlobalLine,
  RiHardDrive3Line,
} from "@remixicon/react"
import {SectionLabel} from "@/components/section-label"

const features = [
  {
    icon: RiCodeSSlashLine,
    title: "Small project. Real address.",
    body: "A home for your experiments, side projects, and things you build just because you can.",
    detail: "Made for personal projects",
  },
  {
    icon: RiGlobalLine,
    title: "A name worth sharing.",
    body: "Turn an IP address into a link people can remember. Your name, on has-a.computer.",
    detail: "Your own subdomain",
  },
  {
    icon: RiHardDrive3Line,
    title: "Your hosting. Your choice.",
    body: "Point to a VPS or the machine under your desk. Keep your address when your setup changes.",
    detail: "Bring your own infrastructure",
  },
]

export function Features() {
  return (
    <section id="features" className="features-section section-border">
      <div className="section-heading">
        <div>
          <SectionLabel id="01" title="Built for your next idea" />
          <h2>
            Good projects start somewhere.
            <br />
            <span>Yours can start here.</span>
          </h2>
        </div>
        <p>
          The personal web is still worth building.
          <br />
          Give your part of it a name.
        </p>
      </div>
      <div className="feature-grid">
        {features.map(({icon: Icon, title, body, detail}) => (
          <article key={title} className="feature-card">
            <Icon className="feature-icon" size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="feature-detail">
              <span>{detail}</span>
              <RiArrowRightUpLine size={15} aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
