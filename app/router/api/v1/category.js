const router = require('express').Router()
const categoryController = require('../../../controller/category')
// define the home page route
router.get('/', function (req, res) {
  categoryController.tree(req,res)
})

module.exports = router
