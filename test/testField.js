const assert = require('assert');
const { Field } = require('../src/field');

describe('Field', () => {
  describe('equals', () => {
    it('should equate same fields', () => {
      const field1 = new Field('a', 'b');
      const field2 = new Field('a', 'b');
      assert.ok(field1.equals(field2));
    });
    it('should return false if fields are different', () => {
      const field1 = new Field('a', 'b');
      const field2 = new Field('a', 'c');
      assert.strictEqual(field1.equals(field2), false);
    });
  });
  describe('getPrompt', () => {
    it('should return the prompt for field', () => {
      const field = new Field('a', 'b');
      assert.strictEqual(field.getPrompt(), 'b');
    });
  });

  describe('fill', () => {
    it('should fill the valid response', () => {
      const field = new Field('a', 'b');
      field.fill('hello');
      assert.deepStrictEqual(field.getResponse(), {
        name: 'a', response: 'hello'
      });
    });
    it('should throw error if response is invalid', () => {
      const field = new Field('a', 'b', () => false);
      assert.throws(() => field.fill('hello'), { message: 'invalid a' });
    });
  });

  describe('getResponse', () => {
    it('should return the response for field', () => {
      const field = new Field('a', 'b');
      field.fill('hello');
      assert.deepStrictEqual(field.getResponse(), {
        name: 'a', response: 'hello'
      });
    });
  });
  describe('isFilled', () => {
    it('should return true if field is filled', () => {
      const field = new Field('a', 'b');
      field.fill('hello');
      assert.strictEqual(field.isFilled(), true);
    });
    it('should return false if field is not filled', () => {
      const field = new Field('a', 'b');
      assert.strictEqual(field.isFilled(), false);
    });
  });

});
