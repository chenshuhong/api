const categoryApi = require('./category');
const router = require('express').Router();
router.use('/category',categoryApi);

module.exports = router;
