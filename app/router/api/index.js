const apiV1 = require('./v1');
const router = require('express').Router();

router.use('/v1',apiV1);
router.use(function (req,res) {
  res.status(404).json({
    message:'api not found'
  })
})

module.exports = router;
