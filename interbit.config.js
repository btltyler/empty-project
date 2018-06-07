const path = require('path')

const config = {
  peers: [],
  adminValidators: [],
  staticChains: {
    main: {
      covenant: 'covenant',
      config: {
        validators: []
      }
    }
  },
  covenants: {
    covenant: {
      location: path.join(__dirname, 'src/covenant')
    }
  },
  apps: {}
}

module.exports = config

