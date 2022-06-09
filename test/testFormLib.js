const assert = require('assert');
const { Field } = require('../src/field');
const { Form } = require('../src/form');
const { processInput } = require('../src/formLib');

describe('Process input', () => {

  it('should display next prompt', () => {
    const nameField = new Field('name', 'enter name');
    const dobField = new Field('dob', 'enter dob');
    const form = new Form([nameField, dobField]);
    const input = 'praju';
    const display = [];
    const logger = (prompt) => display.push(prompt);
    processInput(input, form, logger, () => true);
    assert.deepStrictEqual(display, ['enter dob']);
  });

  it('should display thank you if form is filled', () => {
    const nameField = new Field('name', 'enter name');
    const form = new Form([nameField]);
    const input = 'praju';
    const display = [];
    let callbackOutput;

    const callback = form => {
      callbackOutput = form;
    };

    const logger = (prompt) => display.push(prompt);
    processInput(input, form, logger, callback);
    assert.deepStrictEqual(callbackOutput, form);
    assert.deepStrictEqual(display, ['Thank You']);
  });

  it('should display error message if response is invalid', () => {
    const nameField = new Field('name', 'enter name', () => false);
    const form = new Form([nameField]);
    const input = 'prem';
    const display = [];

    const logger = (prompt) => display.push(prompt);
    processInput(input, form, logger, () => true);
    assert.deepStrictEqual(display, ['invalid name', 'enter name']);
  });
});
