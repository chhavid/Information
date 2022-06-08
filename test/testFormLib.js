const assert = require('assert');
const { Field } = require('../src/field');
const { Form } = require('../src/form');
const { processInput } = require('../src/formLib');

describe('Process input', () => {
  const identity = (text) => text;

  it('should display next prompt', () => {
    const nameField = new Field('name', 'enter name', () => true, identity);
    const dobField = new Field('dob', 'enter dob', () => true, identity);
    const form = new Form([nameField, dobField]);
    const input = 'chhavi';
    const display = [];
    const logger = (prompt) => display.push(prompt);
    processInput(input, form, logger, () => true);
    assert.deepStrictEqual(display, ['enter dob']);
  });

  it('should display thank you if form is filled', () => {
    const nameField = new Field('name', 'enter name', () => true, identity);
    const form = new Form([nameField]);
    const input = 'chhavi';
    const display = [];

    const callback = (_form) => {
      assert.deepStrictEqual(_form, form);
    };

    const logger = (prompt) => display.push(prompt);
    processInput(input, form, logger, callback);
    assert.deepStrictEqual(display, ['Thank You']);
  });
});
