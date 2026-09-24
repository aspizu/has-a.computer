import {rateLimit} from "./middleware/ratelimit"
import root from "./routes/root"
import {hono} from "./utils/hono"

export default hono().use(rateLimit).route("/", root)
