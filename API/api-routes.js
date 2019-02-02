let router = require ('express').Router()

router.get('/', (req,res) => res.json({
    status: 'succcess',
    message: 'API WORKING'
}))

module.exports = router