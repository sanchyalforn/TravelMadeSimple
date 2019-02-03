let express = require('express')
let app     = express()
let fs      = require('fs')
let io      = require('socket.io')(80)


let router = require ('express').Router()

var persones = fs.readFileSync('./db/usuaris.json')
var reviews  = fs.readFileSync('./db/reviews.json')

//donat un nom, tornar les seves reviews
io.on("tornar_trips_nom", function(nom) {
    let response = []
    for (let i = 0; i < reviews.length; ++i) {
        if (reviews[i].name == nom)
            response.append(reviews[i])
    }
    io.emit("reviews_persona", response)
})

//pillar trips/reviews d'una ciutat
io.on("tornar_trips_lloc", function(nom) {
    let response = []
    for (let i = 0; i < reviews.length; ++i) {
        if (reviews[i].city == nom)
            response.append(reviews[i])
    }
    io.emit("reviews_ciutat", response)
})

//alta d'un usuari
io.on("inscripcio_usuari", function(json) {
    persones.append(json)
    fs.writeFileSync('./db/usuaris.json', persones)
})

//nova review
io.on("guardar_review", function(json) {
    reviews.append(json)
    fs.writeFileSync('./db/reviews.json')
})

/*
router.get('/api/:name', (req,res) => {
    let response = []
    for (let i = 0; i < reviews.length; ++i) {
        if (reviews[i].name == $(req.params.name))
            response.append(reviews[i])
    }
    res.json(reresponse)
})

router.get('/api/:trip', (req,res) => {
    let response = []
    for (let i = 0; i < reviews.length; ++i) {
        if (reviews[i].city == $(req.params.trip))
            response.append(reviews[i])
    }
    res.json(response)
})

router.post('/api/:name/:trip', (req,res) => {
    reviews.append({
        "user": $(req.params.name),
        "place": "?",
        "travel": "?",
        "food": "?"
    })
    fs.writeFileSync('./db/reviews.json',persones)
})*/


app.listen(8080, () => console.log("server up!"))