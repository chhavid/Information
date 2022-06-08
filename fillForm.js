process.stdin.setEncoding('utf8');
const { Form } = require('./src/form.js');
const { getFields } = require('./src/createField.js');
const { processInput } = require('./src/formLib.js');
const fs = require('fs');

const saveData = (form) => {
  fs.writeFileSync('./form.json', form.getFormDetails(), 'utf8');
  process.stdin.destroy();
};

const read = (form) => {
  console.log(form.getCurrentPrompt());
  process.stdin.on('data', (chunk) => {
    processInput(chunk, form, console.log, saveData);
  });
};

const main = () => {
  const fields = getFields();
  const form = new Form(fields);
  read(form);
};

main();
