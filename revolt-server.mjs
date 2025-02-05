import express from "express"
import { handler as ssrHandler } from "./dist/server/entry.mjs"
import "dotenv/config"

const app = express()

app.set("x-powered-by", false)

const base = "/"
app.use(base, express.static("dist/client/"))
app.use(ssrHandler)

const port = Number(process.env.PORT) || 8080

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
