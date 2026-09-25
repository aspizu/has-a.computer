import type {ApiErrorResponse} from "@has-a-computer/common"
import {reserveSchema} from "@has-a-computer/common"
import {zValidator} from "@hono/zod-validator"
import {sendReservationEmail} from "../utils/email"
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
  async (c) => {
    try {
      await sendReservationEmail(c.env.RESEND_API_KEY, c.req.valid("json"))
    } catch (error) {
      console.error("Reservation email failed", error)
      return c.json(
        {error: "Could not send your request. Please try again."} satisfies ApiErrorResponse,
        502,
      )
    }

    return c.body(null, 204)
  },
)
