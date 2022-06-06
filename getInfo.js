const { exit } = require('process');
process.stdin.setEncoding('utf8');
const { Information } = require('./personInfo.js');

const processInput = (input, fn, question) => {
  if (fn(input) === false) {
    return false;
  }
  console.log(question);
  return true;
};

const read = (questions, fns, info) => {
  let index = 0;
  const firstQuest = 'Please enter your name';
  console.log(firstQuest);
  process.stdin.on('data', (chunk) => {
    if (processInput(chunk, fns[index], questions[index]) === true) {
      index++;
    } else {
      console.log(questions[index - 1] || firstQuest);
    }
    if (index > 2) {
      info.saveData();
      exit();
    }
  });

  process.stdin.on('end', () => {
    console.log('End');
  });
};

const main = (questions) => {
  const info = new Information();
  const fns = [
    (name) => info.addName(name),
    (dob) => info.addDob(dob),
    (hobbies) => info.addHobbies(hobbies),
    () => info.saveData()
  ];

  read(questions, fns, info);
};

const questions = [
  'Please enter your DOB',
  'Please enter your hobbies',
  'Thank You!'
];

main(questions);
