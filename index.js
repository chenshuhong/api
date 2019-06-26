const express = require('express')
const config = require('./config/config.default.js')
const middlewares = require('./app/middleware')
const app = express()

middlewares.map(middleware=>{
  if (Array.isArray(middleware)){
    app.use(...middleware)
  } else {
    app.use(middleware)
  }
})

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))
