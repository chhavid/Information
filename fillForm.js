process.stdin.setEncoding('utf8');
const { Form } = require('./src/form.js');
const { getQueries } = require('./src/queries.js');
const { processInput } = require('./src/formLib.js');

const read = (form) => {
  console.log(form.getQuery());
  process.stdin.on('data', (chunk) => {
    processInput(chunk, form);
  });
};

const main = () => {
  const queries = getQueries();
  const form = new Form(queries);
  read(form);
};

main();
