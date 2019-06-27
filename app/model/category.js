/**
 * @Author: 陈树鸿
 * @Date: 2019-06-27
 */
const SeQuelize = require('sequelize')
const seq = require('../model/db')
const Category = seq.define('category',{
  name:{
    type:SeQuelize.STRING,
    allowNull:false,
  }
})
module.exports = Category
