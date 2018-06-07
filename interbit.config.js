const path = require('path')

const PUB_KEY =
  'xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q='

const config = {
  peers: [],
  staticChains: {
    main: {
      covenant: 'covenant',
      config: {
        validators: [PUB_KEY]
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

