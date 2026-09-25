import type {ApiErrorResponse} from "@has-a-computer/common"
import {reserveSchema} from "@has-a-computer/common"
import {zValidator} from "@hono/zod-validator"
import {hono} from "../utils/hono"

export default hono().post(
  "/",
  zValidator("json", reserveSchema, (result, c) => {
    if (!result.success) {
      return c.json(
        {error: result.error.issues[0]?.message ?? "Invalid request."} satisfies ApiErrorResponse,
        400,
      )
    }
  }),
  (c) =>
    c.json(
      {
        error: "Reservations are not available yet. Please try again later.",
      } satisfies ApiErrorResponse,
      501,
    ),
)
