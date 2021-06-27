/**
 * @module inxt-bridge/server/middleware
 */

'use strict';

module.exports = {
  rawbody: require('./lib/rawbody'),
  authenticate: require('./lib/authenticate'),
  errorhandler: require('./lib/error-handler'),
  tokenauth: require('./lib/token-auth'),
  publicBucket: require('./lib/public-bucket'),
  rateLimiter: require('./lib/rate-limiter'),
  querystring: require('./lib/query-string')
};
