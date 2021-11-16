const ni = require('../routes/notImplemented')
const nf = require('../routes/notFound')

const allAboard = (isFun, fun) => typeof fun === 'function' && isFun

const connectController = (api, operationId, options) => {
  const { notFound = nf, notImplemented = ni } = options
  const controller = api[operationId]
  const middlewares = (options.middlewares && Array.isArray(options.middlewares)) ? options.middlewares : [];

  return operationId
    ? typeof controller === 'function'
      ? [... middlewares, controller]
      : Array.isArray(controller) && controller.reduce(allAboard, true)
      ? [... middlewares, ...controller]
      : notImplemented
    : notFound
}

module.exports = connectController
