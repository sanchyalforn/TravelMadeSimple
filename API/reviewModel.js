var mongoose = require ('mongoose')

var reviewSchema = mongoose.Schema ({
    user: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    travel: {
        type: String,
        default: "None"
    },

    food: {
        type: String,
        default: "None"
    }
})

var Review  = module.exports = mongoose.model('review',  reviewSchema)
module.exports.get = function (callback, limit) {
    Review.find(callback).limit(limit)
}