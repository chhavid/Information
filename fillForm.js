process.stdin.setEncoding('utf8');
const { Form } = require('./form.js');
const { isNameValid, isDobValid, isphnNumValid, isHobbiesValid, isAddressValid }
  = require('./validators.js');

const processInput = (input, form, query) => {
  return form.addInfo(query.name, input, query.parser, query.validator);
};

const read = (queries, form) => {
  let index = 0;
  console.log(queries[index].query);

  process.stdin.on('data', (chunk) => {
    if (processInput(chunk, form, queries[index]) === true) {
      index++;
    }
    console.log(queries[index].query);
    if (index > 5) {
      form.saveData();
      process.exit();
    }
  });

  process.stdin.on('end', () => {
    console.log('End');
  });
};

const identity = (info) => info.trim();

const parseHobbies = (hobbies) => hobbies.trim().split(',');

const getQueries = () => [
  {
    name: 'name', query: 'Please enter your name',
    validator: isNameValid, parser: identity
  },
  {
    name: 'dob', query: 'Please enter your DOB(yyyy-mm-dd)',
    validator: isDobValid, parser: identity
  },
  {
    name: 'hobbies', query: 'Please enter your hobbies',
    validator: isHobbiesValid, parser: parseHobbies
  },
  {
    name: 'phoneNum', query: 'Please enter your phone number',
    validator: isphnNumValid, parser: identity
  },
  {
    name: 'address', query: 'Please enter your address line 1',
    validator: isAddressValid, parser: identity
  },
  {
    name: 'address', query: 'Please enter your address line 2',
    validator: isAddressValid, parser: identity
  },
  { name: 'last', query: 'Thank You!' }
];

const main = () => {
  const form = new Form();
  const queries = getQueries();
  read(queries, form);
};

main();
