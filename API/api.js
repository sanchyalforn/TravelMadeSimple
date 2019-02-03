let express = require('express')
let app     = express()

let router = require ('express').Router()

var mysql = require('mysql');
    
var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234321",
  database: "royal"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//donat un nom, tornar les seves reviews
router.get('/api/:name', (req,res) => {
    let name = req.params.name
    
    query = "SELECT * FROM trips WHERE user = ?"
    con.query(query, name, function(err,res) {
        if (err)
            callback(err,null);
        callback(null, res)
    })

})

//pillar trips/reviews d'una ciutat
router.get('/api/:city', (req,res) => {
    let city = req.params.place;
    
    query = "SELECT * FROM trips WHERE place = ?"
    con.query(query, city, function(err,res) {
        if (err)
            callback(err,null);
        callback(null, res)
    })
})

//alta d'un usuari
router.post('/api/:name&:password:&:mail', (req,res) => {
    let nom = req.params.name
    let pass = req.params.password
    let mail = req.params.mail ? req.params.mail : "None"

    query = "INSERT INTO users (user,password,mail) values (?,?,?)";

    con.query(query, [name, pass,mail], function(err,res) {
        if (err)
            callback(err,null);
        callback(null, res)
    })

})


app.listen(8080, () => console.log("server up!"))