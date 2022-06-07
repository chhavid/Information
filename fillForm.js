process.stdin.setEncoding('utf8');
const { Form } = require('./form.js');
const { getQueries } = require('./queries.js');

const processInput = (input, form) => {
  form.addInfo(input.trim());
  if (form.areAllDetailsFilled()) {
    console.log('Thank You');
    form.saveData();
    process.exit();
  }
};

const read = (form) => {
  form.displayQuery();
  process.stdin.on('data', (chunk) => {
    processInput(chunk, form);
    form.displayQuery();
  });
};

const main = () => {
  const queries = getQueries();
  const form = new Form(queries);
  read(form);
};

main();
