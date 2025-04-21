import express from "express"
import routerUser from "./router/users.js"

let app = express()

app.use(routerUser)

app.listen(4545,()=>console.log("server is run"))