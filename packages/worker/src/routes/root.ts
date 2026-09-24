import {Hono} from "hono"
import {greet} from "@has-a-computer/common"

const root = new Hono()

root.get("/", (c) => {
  return c.text(greet("worker"))
})

export default root
