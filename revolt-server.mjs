import express from "express"
import { handler as ssrHandler } from "./dist/server/entry.mjs"
import "dotenv/config"
import process from "node:process"

const app = express()

app.set("x-powered-by", false)

const base = "/"
app.use(base, express.static("dist/client/"))
app.use(ssrHandler)
app.use((req, res, next) => {
    req.url = "/404"
    ssrHandler(req, res, next)
})

const port = Number(process.env.PORT) || 8080

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
