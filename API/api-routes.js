let router = require ('express').Router()

router.get('/', (req,res) => res.json({
    status: 'succcess',
    message: 'API WORKING'
}))

var controller = require ('./ReviewController')
router.route('/reviews')
    .get(controller.index)
    .post(controller.new);

router.route('/persones')
    .get(controller.index)
    .post(controller.new)



module.exports = router