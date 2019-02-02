let router = require ('express').Router()

router.get('/', (req,res) => res.json({
    status: 'succcess',
    message: 'API WORKING'
}))

var reviewController = require ('./reviewController')
router.route('/reviews')
    .get(reviewController.index)
    .post(reviewController.new);

var personaController = require ('./personaController')

router.route('/persones')
    .get(personaController.index)
    .post(personaController.new)

module.exports = router