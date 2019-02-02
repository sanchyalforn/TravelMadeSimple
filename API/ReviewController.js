Review = require('./ReviewModel')

//index 
exports.index = function(req,res) {
    Review.get(function (err, reviews) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Retrieved successfully",
            data: reviews
        })
    })
}

//new review
exports.new = function (req,res) {
    var review    = new Review();
    review.city   = req.body.city ? req.body.city : review.city
    review.user   = req.body.user ? req.body.user : review.user
    review.travel = req.body.travel
    review.food   = req.body.food
    //. . .

    review.save (function (err) {
        if (err)
            res.json(err)
        res.json({
            message: 'new review created!',
            data: review
        })
    })
}

//remove review
exports.delete = function (req,res) {
    review.remove ({
        _id: req.params.review_id,
    }, function (err, review) {
        if (err)
            res.send(err)
        req.json({
            status: "success!",
            message: "review deleted!"
        })
    })
}

//view review
exports.view = function (req,res) {
    Review.findById(req.params.review_id, function (err, review) {
        if (err)
            res.send(err)
        res.json({
            message: 'reviews...',
            data: review
        })
    })
}

//modify review
exports.modify = function (req,res) {
    Review.findById(req.params.review_id, function (err, review) {
        if (err)
            res.send(err)
        review.city   = req.body.city ? req.body.city : review.city
        review.user   = req.body.user ? req.body.user : review.user    
        review.travel = req.body.travel
        review.food   = req.body.food
        
        review.save (function (err) {
            if (err)
                res.send (err)
            res.json ({
                message: "updated!",
                data: review
            })
        })
   })
}