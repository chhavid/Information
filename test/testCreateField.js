const assert = require('assert');
const { isNameValid, isDobValid, isPhnNumValid, areHobbiesValid,
  isAddressValid, identity, parseHobbies, parseAddress
} = require('../src/createField');

describe('isNameValid', () => {
  it('should return false for name less than 5 letters', () => {
    assert.strictEqual(isNameValid('prem'), false);
  });
  it('should return true for name more than 4 letters', () => {
    assert.strictEqual(isNameValid('prema'), true);
  });
});

describe('isDobValid', () => {
  it('should return true for dob in yyyy-mm-dd format', () => {
    assert.strictEqual(isDobValid('2022-06-08'), true);
  });
  it('should return false for dob not in yyyy-mm-dd fromat', () => {
    assert.strictEqual(isDobValid('08-06-2022'), false);
  });
});

describe('isPhnNumValid', () => {
  it('should return true 10-digit number', () => {
    assert.strictEqual(isPhnNumValid('1234567890'), true);
  });
  it('should return false if number is not 10 digits', () => {
    assert.strictEqual(isPhnNumValid('12345678'), false);
  });
  it('should return false if number is have letters', () => {
    assert.strictEqual(isPhnNumValid('12345678a0'), false);
  });
});

describe('areHobbbiesValid', () => {
  it('should return true if hobby is provided', () => {
    assert.strictEqual(areHobbiesValid('dancing'), true);
  });
  it('should return false if hobby is not provided', () => {
    assert.strictEqual(areHobbiesValid(''), false);
  });
});

describe('isAddressValid', () => {
  it('should return true if address is provided', () => {
    assert.strictEqual(isAddressValid('koramangla'), true);
  });
  it('should return false if address is not provided', () => {
    assert.strictEqual(isAddressValid(''), false);
  });
});

describe('identity', () => {
  it('should return the input back', () => {
    assert.strictEqual(identity('hey'), 'hey');
  });
});

describe('parseHobbies', () => {
  it('should split hobbies by comma\'s', () => {
    assert.deepStrictEqual(parseHobbies('dancing,singing')
      , ['dancing', 'singing']);
  });
});

describe('parseAddress', () => {
  it('should join addresses by \\n', () => {
    assert.strictEqual(parseAddress(['bangalore', 'karnataka']),
      'bangalore\nkarnataka');
  });
});
