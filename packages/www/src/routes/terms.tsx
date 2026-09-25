import {useEffect} from "react"
import {createFileRoute} from "@tanstack/react-router"
import {Brand} from "@/components/brand"
import {Nav} from "@/components/nav"

export const Route = createFileRoute("/terms")({
  component: TermsPage,
})

const CONTACT_EMAIL = "admin@has-a.computer"

function Section({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <section className="mt-9 first:mt-0">
      <h2 className="text-[19px] leading-snug font-semibold tracking-[-0.01em]">{title}</h2>
      <div className="mt-3 grid gap-3 text-justify text-[16px]/[1.7] text-(--site-ink)">
        {children}
      </div>
    </section>
  )
}

function TermLink({href, children}: {href: string; children: React.ReactNode}) {
  return (
    <a
      href={href}
      data-cuelume-press="tick"
      className="text-(--site-link) underline underline-offset-2 transition-[color,opacity] duration-200 ease-(--ease-reveal) hocus:text-[#075f8e] active:opacity-80 [text-decoration-color:color-mix(in_oklab,currentColor_50%,transparent)]"
    >
      {children}
    </a>
  )
}

function TermsPage() {
  const {onReserve} = Route.useRouteContext()

  useEffect(() => {
    document.title = "Terms of Service | has-a.computer"
  }, [])

  return (
    <div className="min-h-dvh bg-white text-(--site-ink) antialiased">
      <a
        className="fixed top-2.5 left-2.5 z-100 rounded-[8px] bg-white px-[18px] py-2.5 text-[#075f8e] [box-shadow:inset_0_0_0_1px_#cfdde4] [transform:translateY(-160%)] focus:[transform:translateY(0)]"
        href="#terms"
      >
        Skip to content
      </a>
      <Nav variant="plain" onReserve={onReserve} />
      <main id="terms" className="mx-auto w-full max-w-[760px] px-6 pt-4 pb-16 mobile:px-5">
        <div>
          <h1 className="text-[32px] leading-tight font-semibold tracking-[-0.02em]">
            Terms of Service
          </h1>
          <p className="mt-1 text-[13px]/relaxed text-(--site-muted)">
            Last updated on 25th September, 2026
          </p>
          <div className="mt-8 grid gap-3 text-justify text-[16px]/[1.7] text-(--site-ink)">
            <p>
              Welcome to <b>has-a.computer</b> ("our", "us", "we"), a free address service for your
              computer. You bring the hosting, we provide the name. By using our service, you agree
              to the following Terms of Service ("Terms"). Please read them carefully.
            </p>
            <p>
              For questions or concerns about these Terms, please contact us at{" "}
              <TermLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</TermLink>.
            </p>
          </div>
          <Section title="Definitions">
            <p>The following definitions apply within these Terms:</p>
            <ul className="ml-5 list-disc grid gap-2">
              <li>
                <b>"Service"</b> refers to the has-a.computer address registration service, website,
                infrastructure, and related systems operated by has-a.computer.
              </li>
              <li>
                <b>"User"</b>, <b>"you"</b>, and <b>"your"</b> refer to any individual using or
                accessing the Service.
              </li>
              <li>
                <b>"Subdomain"</b> refers to any subdomain registered under the{" "}
                <code className="inline-block rounded bg-[#007cbb14] px-1.5 py-0.5 font-mono text-[13px]/tight shadow-[0_0_4px_#007cbb0a]">
                  has-a.computer
                </code>{" "}
                domain.
              </li>
              <li>
                <b>"Root subdomain"</b> refers to the primary registered subdomain itself, excluding
                any nested subdomains. For example,{" "}
                <code className="inline-block rounded bg-[#007cbb14] px-1.5 py-0.5 font-mono text-[13px]/tight shadow-[0_0_4px_#007cbb0a]">
                  example.has-a.computer
                </code>{" "}
                is a root subdomain, while{" "}
                <code className="inline-block rounded bg-[#007cbb14] px-1.5 py-0.5 font-mono text-[13px]/tight shadow-[0_0_4px_#007cbb0a]">
                  blog.example.has-a.computer
                </code>{" "}
                is a <b>"nested subdomain"</b>.
              </li>
              <li>
                <b>"Content"</b> refers to any website, files, media, software, text, or other
                material hosted or served using a has-a.computer subdomain.
              </li>
            </ul>
          </Section>
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using has-a.computer, you acknowledge that you have read, understood,
              and agree to be bound by these Terms. If you do not agree, you may not use the
              Service.
            </p>
          </Section>
          <Section title="2. Eligibility">
            <p>To use has-a.computer, you must:</p>
            <ol className="ml-5 list-decimal grid gap-2">
              <li>Be at least 13 years old;</li>
              <li>
                Be an individual person, not an organisation, acting either on your own behalf or as
                a representative of a group or non-commercial project;
              </li>
              <li>Use the Service for lawful purposes only;</li>
              <li>Provide accurate and truthful information when requesting an address.</li>
            </ol>
            <p>Subdomains are registered to individuals, not to organisations or companies.</p>
            <p>
              By using has-a.computer, you represent and warrant that you meet these requirements.
              Certain requests, including but not limited to those whose projects are not personal
              or developer related, may carry additional restrictions with regard to review, and we
              may deny such requests at our discretion.
            </p>
          </Section>
          <Section title="3. Service Description">
            <p>
              has-a.computer allows you to register a subdomain under the has-a.computer domain and
              point it at hosting you control. We provide the name only. Hosting, content, and
              availability are your responsibility. The Service is offered "as-is" without
              guarantees of uptime, support, or permanence.
            </p>
            <p>
              Subdomains are intended solely for individuals, software developer groups, and
              non-commercial projects that are related to software development, as long as the
              project does not engage in activities or serve content prohibited by these Terms.
            </p>
            <p>We reserve the right to deny any address request for any reason.</p>
          </Section>
          <Section title="4. Prohibited Activities">
            <p>
              You agree not to use, attempt to use, or permit others to use the Service or any
              related infrastructure for any of the following purposes:
            </p>
            <ol className="ml-5 list-decimal grid gap-2">
              <li>Illegal activities</li>
              <li>Degrading the Service's performance or availability</li>
              <li>Promoting violence or harm</li>
              <li>Harassment, hate speech, or discrimination</li>
              <li>Pornography or sexually explicit material</li>
              <li>Impersonation and misrepresentation</li>
              <li>Infringing third-party rights</li>
              <li>Commercial, for-profit, or political purposes</li>
              <li>Sending unsolicited communications</li>
              <li>Cryptocurrency and blockchain mining</li>
              <li>
                Abusive automation (including but not limited to "bots", "scrapers", or automated
                scripts that place excessive load on the Service)
              </li>
              <li>Proxy or VPN services</li>
              <li>
                Hosting websites on root subdomains that are behind a login page (with the exception
                of login pages for management reasons)
              </li>
              <li>Blogs that are not primarily related to software development</li>
              <li>
                Conversational AI websites or apps that are similar in functionality to websites or
                apps such as Claude, Gemini, or ChatGPT
              </li>
              <li>Any website that is orientated to courses</li>
              <li>
                Video game cheats, hacks, exploits, or unauthorised modifications, including any
                websites, communities, software, downloads, documentation, or services primarily
                intended to facilitate unfair gameplay or circumvent game restrictions
              </li>
            </ol>
            <p className="text-(--site-muted)">
              This list is not exhaustive and may be updated or expanded at any time at our
              discretion.
            </p>
            <p>Violation of this section may result in immediate termination without notice.</p>
          </Section>
          <Section title="5. Subdomain Transfers and Monetisation">
            <p>
              has-a.computer subdomains are provided free of charge and may not be bought, sold,
              traded, rented, leased, auctioned, or otherwise transferred or monetised, whether
              directly or indirectly. This includes transferring or offering rights to a subdomain
              in exchange for money, goods, services, cryptocurrency, or any other form of
              compensation.
            </p>
          </Section>
          <Section title="6. Use of AI (Artificial Intelligence)">
            <p>
              The use of AI for creating, designing, or modifying websites is acceptable as long as
              the website is complete and complies with the prohibited activities guidelines. We are
              strongly against the use of AI agents for submitting requests in bulk or in an
              automated fashion, and may reject such requests alongside blocking or limiting the
              author's ability to use the Service, if used.
            </p>
          </Section>
          <Section title="7. Ownership and Intellectual Property">
            <p>
              has-a.computer retains all rights, title, and interest in the has-a.computer domain
              and associated systems.
            </p>
            <p>
              You retain ownership of any Content you host on your subdomain. Your hosted content,
              however, must not infringe on third-party rights.
            </p>
            <p>You grant us permission to use your registration data to operate the Service.</p>
          </Section>
          <Section title="8. Termination of Service">
            <p>
              We reserve the right to terminate your subdomain at any time, for any reason. While we
              make reasonable efforts to provide notice in advance, we are not obligated to do so.
            </p>
          </Section>
          <Section title="9. Privacy">
            <p>
              We collect and process only the personal data strictly necessary to operate
              has-a.computer. We do not sell or share your data with third parties for marketing
              purposes. While we take reasonable precautions, we are not responsible for any data or
              privacy breaches resulting from the use of the Service.
            </p>
            <p>
              For privacy-related inquiries, please contact us at{" "}
              <TermLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</TermLink>.
            </p>
          </Section>
          <Section title="10. Disclaimer and Limitation of Liability">
            <p>
              The Service is provided "as-is" and "as available". We make no warranties, expressed
              or implied, regarding the Service's functionality, reliability, or suitability for any
              particular purpose.
            </p>
            <p>You use the Service at your own risk.</p>
          </Section>
          <Section title="11. Indemnification">
            <p>
              You agree to indemnify and hold harmless has-a.computer, its operators, and affiliates
              from any claims, losses, liabilities, or expenses arising from your use of the Service
              or violation of these Terms.
            </p>
          </Section>
          <Section title="12. Governing Law and Jurisdiction">
            <p>
              These Terms are governed by the laws applicable in the operator's jurisdiction of
              residence. Any disputes arising out of or relating to these Terms will be subject to
              the exclusive jurisdiction of the courts of that jurisdiction.
            </p>
          </Section>
          <Section title="13. Modification of Terms">
            <p>
              We reserve the right to update or modify these Terms at any time. Changes will be
              effective immediately upon posting. Your continued use of the Service constitutes
              acceptance of the updated Terms.
            </p>
            <p>
              If changes are made, we will notify users by posting them on our website or Discord
              server.
            </p>
          </Section>
        </div>
      </main>
      <footer className="flex flex-col items-center gap-1 px-6 pb-8 text-center text-[11px]/relaxed text-(--site-muted)">
        <div className="text-(--site-muted)/70">
          <Brand />
        </div>
        <p>
          made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="https://aspiz.uk"
            data-cuelume-press="tick"
            className="relative inline-block font-semibold transition-colors after:absolute after:right-0 after:bottom-0.5 after:left-0 after:h-px after:bg-current after:opacity-0 after:content-[''] hocus:text-(--site-link) hocus:after:opacity-50"
          >
            aspizu
          </a>
        </p>
      </footer>
    </div>
  )
}
