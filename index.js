'use strict'

const Glue = require('glue')
const manifest = require('λ/config/manifest')

Glue.compose(manifest, {
  relativeTo: __dirname
}, function (e, server) {
  if (e) {
    throw e
  }
  server.start(function (e) {
    if (e) {
      throw e
    }
    console.log('Server running at: ', server.info.uri)
  })
})
// const Hapi = require('hapi')
// const config = require('λ/config')
// const CONSTANT = require('λ/constants')
// const STRING = require('λ/strings')
//
// const server = new Hapi.Server()
//
// server.connection({
//   host: config.host,
//   port: config.port
// })
//
// server.route({
//   method: CONSTANT.METHOD.GET,
//   path: CONSTANT.ROUTE.HELLO,
//   handler: function (request, reply) {
//     return reply(STRING.HELLO_WORLD)
//   }
// })
//
// server.register({
//   register: require('good'),
//   options: {
//     opsInterval: 1000,
//     reporters: [{
//       reporter: require('good-console'),
//       events: { log: '*', response: '*' }
//     }]
//   }
// }, function (e) {
//   if (e) {
//     console.error(e)
//   } else {
//     server.start(function (e) {
//       if (e) {
//         throw e
//       }
//       console.log('Server running at: ', server.info.uri)
//     })
//   }
// })
