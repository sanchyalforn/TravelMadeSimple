var mongoose = require ('mongoose')

var personaSchema = mongoose.Schema ({
    user: {
        type: String,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: String,

})

var Persona = module.exports = mongoose.model('persona', personaSchema)