process.stdin.setEncoding('utf8');
const { Form } = require('./form.js');

const getFns = (form) => {
  return {
    name: () => form.isNameValid(),
    dob: () => form.isDobValid(),
    phoneNum: () => form.isphnNumValid(),
    hobbies: () => form.isHobbiesValid(),
    address: () => true,
  };
};

const processInput = (input, form, queryName) => {
  const fns = getFns(form);
  form.addInfo(queryName, input);
  return fns[queryName]();
};

const read = (queries, form) => {
  let index = 0;
  console.log(queries[index].query);

  process.stdin.on('data', (chunk) => {
    if (processInput(chunk, form, queries[index].name)) {
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

const getQueries = () => [
  { name: 'name', query: 'Please enter your name' },
  { name: 'dob', query: 'Please enter your DOB(yyyy-mm-dd)' },
  { name: 'hobbies', query: 'Please enter your hobbies' },
  { name: 'phoneNum', query: 'Please enter your phone number' },
  { name: 'address', query: 'Please enter your address line 1' },
  { name: 'address', query: 'Please enter your address line 2' },
  { name: 'last', query: 'Thank You!' }
];

const main = () => {
  const form = new Form();
  const queries = getQueries();
  read(queries, form);
};

main();
