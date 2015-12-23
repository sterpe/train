const CONSTANT = require('λ/constants')
const STRING = require('λ/strings')

exports.register = function (server, options, next) {
  server.route({
    method: CONSTANT.METHOD.GET,
    path: CONSTANT.ROUTE.HELLO,
    handler: function (request, reply) {
      return reply(STRING.HELLO_WORLD)
    }
  })
  server.route({
    method: CONSTANT.METHOD.GET,
    path: CONSTANT.ROUTE.STAR,
    handler: function (request, reply) {
      reply.file('404.html')
    }
  })
  next()
}

exports.register.attributes = {
  name: __filename,
  version: '1.0.0'
}
