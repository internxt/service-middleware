'use strict';

const expect = require('chai').expect;
const querystring = require('../lib/query-string.js');

describe('Query string parser', function () {
  const req = { query: () => null }

  it('should be a function', function (done) {
    req.query = () => undefined;
    expect(typeof (req.query)).to.be.equals('function');
    done();
  });

  it('should parse query string', function (done) {
    req.query = () => undefined;
    querystring(req, null, () => {
      expect(req.query).not.string;
      done();
    });
  });

  it('should not crash on null query string', function (done) {
    req.query = () => null;
    querystring(req, null, done);
  });

  it('should not crash on undefined query string', function (done) {
    req.query = () => undefined;
    querystring(req, null, done);
  });

  it('should not parse ? character', function (done) {
    req.query = () => '?param1=1';
    querystring(req, null, () => {
      expect(req.query.param1).to.be.undefined;
      done();
    });
  });

  it('should parse query string', function (done) {
    req.query = () => 'param1=1&param2=3';
    querystring(req, null, () => {
      expect(req.query.param1).to.be.equals('1');
      expect(req.query.param2).to.be.equals('3');
      done();
    });
  });

  it('should decode special chars', function (done) {
    req.query = () => 'test=%26%3F%3D';
    querystring(req, null, () => {
      expect(req.query.test).to.be.equals('&?=');
      done();
    });
  });
});
