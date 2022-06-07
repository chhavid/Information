process.stdin.setEncoding('utf8');
const { Form } = require('./form.js');
const { isNameValid, isDobValid, isphnNumValid, isHobbiesValid, isAddressValid }
  = require('./validators.js');

const processInput = (input, form) => {
  return form.addInfo(input);
};

const read = (form) => {
  form.displayQuery();

  process.stdin.on('data', (chunk) => {
    processInput(chunk, form);
    if (form.areAllDetailsFilled()) {
      console.log('Thank You');
      form.saveData();
      process.exit();
    }
    form.displayQuery();
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
  }
];

const main = () => {
  const queries = getQueries();
  const form = new Form(queries);
  read(form);
};

main();
