const questions = [
  {
    question: "Is hosting included?",
    answer:
      "No. This provides a subdomain. Your website or service runs on your own computer or with a hosting provider.",
  },
  {
    question: "Can I use a computer at home?",
    answer:
      "Yes, if it can receive traffic from the internet. Use a publicly reachable IP address or a tunnel that your hosting setup supports.",
  },
  {
    question: "What about HTTPS?",
    answer:
      "Set up HTTPS with your hosting provider or on your server. A DNS record alone does not provide a TLS certificate.",
  },
  {
    question: "Can I register a name now?",
    answer:
      "Registration is not open yet. You can check a name's format above, but names cannot be reserved yet.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="info-section faq-section">
      <div className="section-copy">
        <h2>Good to know</h2>
      </div>
      <div className="faq-list">
        {questions.map(({question, answer}) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true" className="faq-toggle" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
