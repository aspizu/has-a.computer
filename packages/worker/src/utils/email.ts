import type {ReserveRequest} from "@has-a-computer/common"

export async function sendReservationEmail(
  apiKey: string,
  {subdomain, email, website, coverLetter}: ReserveRequest,
) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "has-a.computer <onboarding@resend.dev>",
      to: "aspizu@protonmail.com",
      reply_to: email,
      subject: `Reservation request: ${subdomain}.has-a.computer`,
      text: [
        `Address: ${subdomain}.has-a.computer`,
        `Email: ${email}`,
        `Website: ${website}`,
        "",
        "Cover letter:",
        coverLetter,
      ].join("\n"),
    }),
  })

  if (!response.ok) {
    const result: {message: string} = await response.json()
    throw new Error(result.message)
  }
}
