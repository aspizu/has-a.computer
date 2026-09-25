import type {ApiErrorResponse} from "@has-a-computer/common"
import {createMiddleware} from "hono/factory"
import type {Bindings} from "../utils/hono"

export const rateLimit = createMiddleware<{Bindings: Bindings}>(async (c, next) => {
  const ip = c.req.header("cf-connecting-ip") ?? "unknown"
  const {success} = await c.env.RATE_LIMITER.limit({key: ip})

  if (!success) {
    return c.json({error: "Too many requests"} satisfies ApiErrorResponse, 429)
  }

  await next()
})
