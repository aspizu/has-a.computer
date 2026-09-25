import type {ApiErrorResponse, ReserveRequest} from "@has-a-computer/common"

const reserveUrl = import.meta.env.DEV
  ? "/api/reserve"
  : "https://has-a-computer-worker.aspizu.workers.dev/reserve"

export async function reserveAddress(value: ReserveRequest) {
  const response = await fetch(reserveUrl, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(value),
  })

  if (!response.ok) {
    const result: ApiErrorResponse = await response.json()
    throw new Error(result.error)
  }
}
