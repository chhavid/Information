const assert = require('assert');
const { Form } = require('../src/form');
const { processInput } = require('../src/formLib');

describe('Process input', () => {
  it('should display next prompt', () => {
    const queries = [{
      name: 'name',
      query: 'enter name',
      validator: () => true,
      parser: (response) => response
    },
    {
      name: 'dob',
      query: 'enter dob',
      validator: () => true,
      parser: (response) => response
    }];
    const form = new Form(queries);
    const input = 'chhavi';
    const display = [];
    const logger = (prompt) => display.push(prompt);
    processInput(input, form, logger, () => true);
    assert.deepStrictEqual(display, ['enter dob']);
  });

  it('should display thank you if form is filled', () => {
    const queries = [{
      name: 'name',
      query: 'enter name',
      validator: () => true,
      parser: (response) => response
    }];
    const form = new Form(queries);
    const input = 'chhavi';
    const display = [];
    const logger = (prompt) => display.push(prompt);
    processInput(input, form, logger, () => true);
    assert.deepStrictEqual(display, ['Thank You']);
  });
});
