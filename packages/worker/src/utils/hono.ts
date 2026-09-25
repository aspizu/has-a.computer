import {Hono} from "hono"

export interface Bindings {
  RATE_LIMITER: RateLimit
  RESEND_API_KEY: string
}

export function hono() {
  return new Hono<{Bindings: Bindings}>()
}
