process.stdin.setEncoding('utf8');
const { Form } = require('./form.js');

const processInput = (input, form, query) => {
  return form.addInfo(query.name, input, query.validator);
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

const validateDate = (date) => {
  return date.length === 2 && isFinite(date);
};
const validateMonth = (month) => {
  return month.length === 2 && isFinite(month);
};
const validateYear = (year) => {
  return year.length === 4 && isFinite(year);
};

const isNameValid = (name) => name.length > 3;

const isphnNumValid = (phoneNum) => {
  return phoneNum.trim().length === 10 && isFinite(phoneNum.trim());
};

const isHobbiesValid = (hobbies) => {
  if (hobbies === '\n') {
    return false;
  }
  return hobbies.length > 0;
};

const isDobValid = (dob) => {
  const dobArray = dob.trim().split('-');
  if (dobArray.length !== 3) {
    return false;
  }
  const [year, month, date] = dobArray;
  return validateYear(year) && validateMonth(month) &&
    validateDate(date);
};

const isAddressValid = (address) => {
  return address;
};

const getQueries = () => [
  {
    name: 'name', query: 'Please enter your name',
    validator: isNameValid
  },
  {
    name: 'dob', query: 'Please enter your DOB(yyyy-mm-dd)',
    validator: isDobValid
  },
  {
    name: 'hobbies', query: 'Please enter your hobbies',
    validator: isHobbiesValid
  },
  {
    name: 'phoneNum', query: 'Please enter your phone number',
    validator: isphnNumValid
  },
  {
    name: 'address', query: 'Please enter your address line 1',
    validator: isAddressValid
  },
  {
    name: 'address', query: 'Please enter your address line 2',
    validator: isAddressValid
  },
  { name: 'last', query: 'Thank You!' }
];

const main = () => {
  const form = new Form();
  const queries = getQueries();
  read(queries, form);
};

main();
