const assert = require('assert');
const { Form } = require('../src/form');
const { Field } = require('../src/field.js');

describe('Form', () => {
  describe('equals', () => {
    it('should equate two same form', () => {
      const field = new Field('a', 'b');
      const form1 = new Form([field]);
      const form2 = new Form([field]);
      assert.ok(form1.equals(form2));
    });
    it('should return false if forms are different', () => {
      const field1 = new Field('a', 'b');
      const field2 = new Field('a', 'c');
      const form1 = new Form([field1]);
      const form2 = new Form([field2]);
      assert.strictEqual(form1.equals(form2), false);
    });
  });

  describe('getCurrentPrompt', () => {
    it('should give current prompt', () => {
      const field = new Field('a', 'b');
      const form = new Form([field]);
      assert.strictEqual(form.getCurrentPrompt(), 'b');
    });
  });

  describe('getFormDetails', () => {
    it('should add in current field', () => {
      const field = new Field('a', 'b');
      const form = new Form([field]);
      form.addField('hello');
      assert.strictEqual(form.getFormDetails(), '{"a":"hello"}');
    });
  });

  describe('addField', () => {
    it('should give details of each field', () => {
      const field = new Field('a', 'b');
      const form = new Form([field]);
      form.addField('hello');
      assert.strictEqual(form.getFormDetails(), '{"a":"hello"}');
    });
  });

  describe('areAllDetailsFilled', () => {
    it('should return true if all details are filled', () => {
      const field = new Field('a', 'b');
      const form = new Form([field]);
      form.addField('hello');
      assert.strictEqual(form.areAllDetailsFilled(), true);
    });

    it('should return false if all details are not filled', () => {
      const field = new Field('a', 'b');
      const form = new Form([field]);
      assert.strictEqual(form.areAllDetailsFilled(), false);
    });
  });

});
