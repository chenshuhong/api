const router = require('express').Router()
const categoryController = require('../../../controller/category')
// define the home page route
router.get('/', function (req, res) {
  res.json(categoryController.tree(req,res))
})

module.exports = router
