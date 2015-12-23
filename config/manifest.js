const Path = require('path')
const config = require('λ/config')
const CONSTANT = require('λ/constants')

module.exports = {
  connections: [{
    host: config.host,
    port: config.port,
    routes: {
      files: {
        relativeTo: Path.join(process.cwd(),
          CONSTANT.PUBLIC_HTML_DIR)
      }
    }
  }],
  plugins: [{
    'inert': {
    }
  }, {
    'λ/config/routes': {
    }
  }, {
    'good': {
      opsInterval: 1000,
      reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*' }
      }]
    }
  }]
}
