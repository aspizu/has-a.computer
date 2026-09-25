import {cors} from "hono/cors"
import {rateLimit} from "./middleware/ratelimit"
import reserve from "./routes/reserve"
import {hono} from "./utils/hono"

export default hono()
  .use(
    "/reserve",
    cors({
      origin: [
        "https://has-a.computer",
        "http://has-a.computer",
        "https://www.has-a.computer",
        "http://www.has-a.computer",
      ],
      allowMethods: ["POST"],
      allowHeaders: ["Content-Type"],
    }),
  )
  .use(rateLimit)
  .route("/reserve", reserve)
