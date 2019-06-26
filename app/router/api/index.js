const categoryApi = require('./category')
module.exports = function () {
  const router = require('express').Router()
  router.use('/category',categoryApi)
  return router
}
