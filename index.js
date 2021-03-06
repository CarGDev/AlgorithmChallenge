'use strict'

const express = require('express')
const cors = require('cors')
const config = require('./config/config')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

routes(app).algorithRoute()
routes(app).flowChartRoute()
routes(app).errorsRoute()

app.listen(config().port, () => {
  console.log(`Listening in port ${config().port}`)
})