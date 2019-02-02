Persona = require('./PersonaModel')

//index 
exports.index = function(req,res) {
    Persona.get(function (err, persones) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Retrieved successfully",
            data: persones
        })
    })
}

//new review
exports.new = function (req,res) {
    var persona      = new Persona();
    persona.name     = req.body.city ? req.body.city : persona.city
    persona.user     = req.body.user ? req.body.user : persona.user
    persona.password = req.body.password
    persona.email    = req.body.email


    review.save (function (err) {
        if (err)
            res.json(err)
        res.json({
            message: 'new persona created!',
            data: persona
        })
    })
}

//remove persona
exports.delete = function (req,res) {
    persona.remove ({
        _id: req.params.persona_id,
    }, function (err, persona) {
        if (err)
            res.send(err)
        req.json({
            status: "success!",
            message: "persona deleted!"
        })
    })
}

//view review
exports.view = function (req,res) {
    Persona.findById(req.params.persona_id, function (err, persona) {
        if (err)
            res.send(err)
        res.json({
            message: 'persones...',
            data: persona
        })
    })
}

//modify review
exports.modify = function (req,res) {
    Persona.findById(req.params.review_id, function (err, persona) {
        if (err)
            res.send(err)
        persona.name     = req.body.city ? req.body.city : persona.city
        persona.user     = req.body.user ? req.body.user : persona.user
        persona.password = req.body.password
        persona.email    = req.body.email
        
        review.save (function (err) {
            if (err)
                res.send (err)
            res.json ({
                message: "updated!",
                data: persona
            })
        })
   })
}