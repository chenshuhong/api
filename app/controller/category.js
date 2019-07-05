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
        categorys = [
          {
            id:1,
            name:'手机'
          }
        ]
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
