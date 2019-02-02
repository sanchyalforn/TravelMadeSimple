const express = require ('express')
const path    = require ('path')
const app     = express()
const port    = 8080

let apiRoutes = require("./api-routes")

app.use('/api', apiRoutes)


app.listen(port, () => console.log("app listening on port: " + port))