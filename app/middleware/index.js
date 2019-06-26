const bodyParser = require('body-parser');
// 引入 API  Router
const apiRouter = require("../router/api");
module.exports = [require('./log'),bodyParser.json(),bodyParser.urlencoded({extended: true}),['/api',apiRouter]]
