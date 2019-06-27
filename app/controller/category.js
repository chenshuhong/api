/**
 * @Author: 陈树鸿
 * @Date: 2019-06-27
 */
const Category = require('../model/category');

module.exports = {
  tree(req, res) {
    return Category
      .findAll()
      .then(categorys => {
        res.json({
          code:0,
          data:categorys
        })
      })
      .catch(err=>{
        res.status(400).json(err)
      })
  }
}
