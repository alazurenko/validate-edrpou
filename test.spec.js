const assert = require('assert');
const validate = require('./index');

const validCode = '32813827';
const invalidCode = '21388124';

describe('validate-edrpou', () => {

  it('should return true if code is valid', () => {
    assert.equal(validate(validCode), true);
  });

  it('should return false if code is invalid', () => {
    assert.equal(validate(invalidCode), false);
  });
  
});