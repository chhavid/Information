const { exit } = require('process');
process.stdin.setEncoding('utf8');
const { Information } = require('./personInfo.js');

const processInput = (input, fn, question) => {
  fn(input);
  console.log(question);
};

const read = (questions, fns, info) => {
  let index = 0;

  console.log('Please enter your name');
  process.stdin.on('data', (chunk) => {
    processInput(chunk, fns[index], questions[index]);
    index++;
    if (index > 2) {
      info.saveData();
      exit();
    }
  });

  process.stdin.on('end', () => {
    console.log('End');
  });
};

const questions = [
  'Please enter your DOB',
  'Please enter your hobbies',
  'Thank You!'
];

const main = () => {
  const info = new Information();
  const fns = [
    (name) => info.addName(name),
    (dob) => info.addDob(dob),
    (hobbies) => info.addHobbies(hobbies),
    () => info.saveData()
  ];

  read(questions, fns, info);
};

main();
