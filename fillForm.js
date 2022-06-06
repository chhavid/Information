process.stdin.setEncoding('utf8');
const { Form } = require('./form.js');

const processInput = (input, fn, question) => {
  if (!fn(input)) {
    return false;
  }
  console.log(question);
  return true;
};

const read = (questions, fns, info) => {
  let index = 0;
  const firstStatement = 'Please enter your name';
  console.log(firstStatement);
  process.stdin.on('data', (chunk) => {
    if (processInput(chunk, fns[index], questions[index]) === true) {
      index++;
    } else {
      console.log(questions[index - 1] || firstStatement);
    }
    if (index > 5) {
      info.saveData();
      process.exit();
    }
  });

  process.stdin.on('end', () => {
    console.log('End');
  });
};

const getFns = (info) => [
  (name) => info.addName(name),
  (dob) => info.addDob(dob),
  (hobbies) => info.addHobbies(hobbies),
  (number) => info.addPhnNo(number),
  (line) => info.addAddress(line),
  (line) => info.addAddress(line),
  () => info.saveData()
];

const main = (statements) => {
  const info = new Form();
  const fns = getFns(info);
  read(statements, fns, info);
};

const statements = [
  'Please enter your DOB(yyyy-mm-dd)',
  'Please enter your hobbies',
  'Please enter your phone number',
  'Please enter your address line 1',
  'Please enter your address line 2',
  'Thank You!'
];

main(statements);
