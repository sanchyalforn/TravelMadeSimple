let express = require('express')
let app     = express()

let router = require ('express').Router()

var mysql = require('mysql');
var bodyParser = require('body-parser')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "royal",
  insecureAuth : true
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//donat un nom, tornar les seves reviews
app.get('/name/:name', (req,res) => {
    let name = req.params.name
    console.log(req.params)
    query = "SELECT * FROM trips WHERE user = ?"
    con.query(query, name, function(err,resp) {
        if (err)
            return null
        console.log("holi")
        res.send(resp)
        return resp
    })

})

//pillar trips/reviews d'una ciutat
app.get('/city/:city', (req,res) => {
    let city = req.params.city;
    console.log(req.params)
    query = "SELECT * FROM trips WHERE place = ?"
    con.query(query, city, function(err,resp) {
        if (err)
            return null
        res.send(resp)
        return resp
    })
})

//alta d'un usuari
app.post('/:name&:password&:mail', (req,res) => {
    let nom = req.params.name
    let pass = req.params.password
    let mail = req.params.mail ? req.params.mail : "None"

    query = "INSERT INTO users (user,password,mail) values (?,?,?)";

    con.query(query, [name, pass,mail], function(err,resp) {
        if (err)
            return null
        console.log("holi")
        res.send(resp)
        return resp
    })

})

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(8080, () => console.log("server up!"))