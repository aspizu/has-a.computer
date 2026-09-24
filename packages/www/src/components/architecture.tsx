import {useState} from "react"
import {CopyButton} from "@/components/copy-button"

const records = {
  A: {
    target: "203.0.113.10",
    description: "An A record points your subdomain to your server's IPv4 address.",
  },
  CNAME: {
    target: "project.pages.dev",
    description: "A CNAME record points your subdomain to another hostname.",
  },
}

export function Architecture() {
  const [type, setType] = useState<keyof typeof records>("A")
  const record = records[type]

  return (
    <section id="architecture" className="info-section">
      <div className="section-copy">
        <h2>How it works</h2>
        <p>
          A subdomain is an address for a service you host. A DNS record tells browsers where to
          find it.
        </p>
        <a
          className="plain-link"
          href="https://developers.cloudflare.com/dns/manage-dns-records/reference/dns-record-types/"
          target="_blank"
          rel="noreferrer"
        >
          About DNS records <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <div className="dns-example">
        <div className="dns-toolbar">
          <span>Example record</span>
          <div className="record-switch" role="group" aria-label="Example DNS record type">
            {(["A", "CNAME"] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={type === value}
                onClick={() => setType(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="record-table">
          <table>
            <caption className="sr-only">Example {type} record for homelab.has-a.computer</caption>
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Name</th>
                <th scope="col">Content</th>
                <th scope="col">
                  <span className="sr-only">Copy</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>{type}</code>
                </td>
                <td>
                  <code>homelab</code>
                </td>
                <td>
                  <code>{record.target}</code>
                </td>
                <td>
                  <CopyButton text={record.target} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="record-description" aria-live="polite">
          {record.description}
        </p>
      </div>
    </section>
  )
}
