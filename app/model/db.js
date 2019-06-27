/**
 * @Author: 陈树鸿
 * @Date: 2019-06-27
 */
const Sequelize = require('sequelize');
const mysqlConfig = require('../../config/config.default').mysql

const sequelize = new Sequelize(
  mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, mysqlConfig
);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize
