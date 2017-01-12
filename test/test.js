'use strict';
const assert = require('assert');
const code = require('../thursday-warmup.js');

describe ('isRamp', function() {
  it('should determine if the number is a ramp', function() {
    assert.equal(true, code.isRampNumber(1234));
    assert.equal(false, code.isRampNumber(10234));
  });
  it('should only accept positive integers as input', function() {
    assert.equal(false, code.isRampNumber(-5));
    assert.equal(false, code.isRampNumber('a string'));
  });
});
