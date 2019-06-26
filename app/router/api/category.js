const router = require('express').Router()

// define the home page route
router.get('/', function (req, res) {
  res.json({
    data:[
      {
        id:1,
        name:'手机'
      },
      {
        id:2,
        name:'电脑'
      }
    ]
  })
})

module.exports = router
