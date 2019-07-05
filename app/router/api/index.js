const apiV1 = require('./v1');
const router = require('express').Router();

router.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next()
})
router.use('/v1',apiV1);
router.use(function (req,res) {
  res.status(404).json({
    msg:'api not found'
  })
})

module.exports = router;
