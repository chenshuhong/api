const path = require('path');
const express = require("express");
const logger = require("morgan");//日志
const bodyParser = require('body-parser');//参数解析
const staticPath = path.join(__dirname, "static"); // 设置静态文件的路径

const apiRouter = require("../router/api");// 引入 API  Router
module.exports = [
  logger('short'),
  express.static(staticPath),
  bodyParser.json(),
  bodyParser.urlencoded({extended: true}),
  ['/api', apiRouter]
];
