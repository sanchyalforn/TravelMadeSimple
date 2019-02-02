let express = require ('express')
let app     = express()
let bodyParser = require ('body-parser')
let mongoose = require ('mongoose')

let apiRoutes = require("./api-routes")

//Configure bodyparser per handlejar POST methods
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/API');
var db = mongoose.connection;

//ROUTES
app.use('/api', apiRoutes)

var port    = 8080
app.listen(port, () => console.log("app listening on port: " + port))