let express = require('express')
let app     = express()

let router = require ('express').Router()

var mysql = require('mysql');
var bodyParser = require('body-parser')

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "travelmadesimple",
  password: "123456",
  database: "royal",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//donat un nom, tornar les seves reviews
app.get('/name/:name', (req,res) => {
    let name = req.params.name
    console.log(req.params)
    query = "SELECT * FROM trips WHERE user = ?;"
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
    query = "SELECT * FROM trips WHERE place = '"+ city +"';"
    con.query(query, city, function(err,resp) {
        if (err){
            console.log(err)
            return err
        }
        res.send(resp)
        return resp
    })
})

app.get('/check/:user', (req,res) => {
    let user = req.params.user
    console.log(user)

    query = "SELECT * FROM users WHERE user = '" + user +"'";
    con.query(query, function(err,resp) {
        if (err){
            console.log(err)
            return err
        }
        res.send(resp)
        return resp
    })
})


app.get('/login/:user/:pass', (req,res) => {
    let user = req.params.user
    let pass = req.params.pass
    console.log(req.params)
    query = "SELECT count(*) as nouser FROM users WHERE user = '"+ user +"' AND password = '"+ pass +"';"
    con.query(query, function(err,resp) {
        if (err){
            console.log(err)
            return err
        }
        res.send(resp)
        return resp
    })
})

//alta d'un usuari
app.post('/user', (req,res) => {
    let nom = req.query.name
    let pass = req.query.password
    let mail = req.query.mail ? req.query.mail : "None"

    query = "INSERT INTO users (user,password,mail) values (?,?,?);";

    con.query(query, [nom, pass,mail], function(err,resp) {
        console.log(err)
        if (err){
            console.log(err)
            return err
        }
        console.log("holi")
        res.send(resp)
        return resp
    })
})

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(80, () => console.log("server up!"))
