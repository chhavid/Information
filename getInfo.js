const { exit } = require('process');
process.stdin.setEncoding('utf8');
const { Information } = require('./personInfo.js');

let index = 0;
const processInput = (input, info) => {
  const questions = [
    {
      ques: 'Please enter you name',
      fn: (name) => info.addName(name)
    },
    {
      ques: 'Please enter your DOB',
      fn: (dob) => info.addDob(dob)
    },
    {
      ques: 'Please enter your hobbies',
      fn: (hobbies) => info.addHobbies(hobbies)
    },
    {
      ques: 'Thank You!',
      fn: () => info.saveData()
    }
  ];
  console.log(questions[index].ques);
  questions[index].fn(input);
  index++;
  if (index > 3) {
    exit();
  }
};

const read = () => {
  console.log('Please enter you name');
  const info = new Information();
  process.stdin.on('data', (chunk) => {
    processInput(chunk, info);
  });

  process.stdin.on('end', () => {
    console.log('End');
  });
};

read();
