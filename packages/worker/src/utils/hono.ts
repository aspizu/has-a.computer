import {Hono} from "hono"

export interface Bindings {
  RATE_LIMITER: RateLimit
}

export function hono() {
  return new Hono<{Bindings: Bindings}>()
}
