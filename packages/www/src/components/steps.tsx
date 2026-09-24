import {CopyButton} from "@/components/copy-button"
import {SectionLabel} from "@/components/section-label"

const steps = [
  {
    n: "01",
    title: "Choose your name",
    body: "Start with a name for you or your project. Keep it short and make it memorable.",
    example: "yourname.has-a.computer",
  },
  {
    n: "02",
    title: "Connect your hosting",
    body: "Point your DNS record at the place your project runs, using an IP address or hostname.",
    example: "CNAME → home.example.com",
  },
  {
    n: "03",
    title: "Share your project",
    body: "Once your DNS and hosting are set up, your project has a place on the web.",
    example: "https://yourname.has-a.computer",
  },
]

export function Steps() {
  return (
    <section id="install" className="steps-section section-border">
      <div className="section-heading">
        <div>
          <SectionLabel id="04" title="Get started" />
          <h2>From a name to your next project.</h2>
        </div>
      </div>
      <div className="steps-grid">
        {steps.map((step) => (
          <article key={step.n} className="step">
            <div className="step-number">{step.n}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <div className="step-example">
              <code>{step.example}</code>
              <CopyButton text={step.example} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
