/**
 * @module inxt-bridge/server/middleware/query-string
 */

 'use strict';

 const queryString = require('querystring');
 
 module.exports = function querystring(req, res, next) {
   req.query = queryString.parse(req.query());
   next();
 };
 