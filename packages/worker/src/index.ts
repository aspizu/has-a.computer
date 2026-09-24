import {Hono} from "hono"
import {rateLimit} from "./middleware/ratelimit"
import root from "./routes/root"

const app = new Hono<{Bindings: Env}>()

app.use(rateLimit)
app.route("/", root)

export default app
