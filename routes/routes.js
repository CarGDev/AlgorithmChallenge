'use strict'

const algorithms = require('../api/Algorithms/network')
const flowChart = require('../api/FlowChart/network')
const errors = require('../network/errors')

const routes = (app) => {
  const algorithRoute = () => app.use('/Algorithms', algorithms)
  const flowChartRoute = () => app.use('/FlowChart', flowChart)
  const errorsRoute = () => app.use(errors)

  return {
    algorithRoute,
    flowChartRoute,
    errorsRoute
  }
}

module.exports = routes
