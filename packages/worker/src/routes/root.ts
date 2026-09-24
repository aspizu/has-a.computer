import {greet} from "@has-a-computer/common"
import {hono} from "../utils/hono"

export default hono().get("/", (c) => c.text(greet("worker")))
