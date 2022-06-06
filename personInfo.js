const fs = require('fs');

class Information {
  constructor() {
    this.name = '';
    this.dob = '';
    this.hobbies = [];
  }

  addName(name) {
    this.name = name;
  }
  addDob(dob) {
    this.dob = dob;
  }
  addHobbies(hobbies) {
    this.hobbies = hobbies;
  }

  saveData() {
    fs.writeFileSync('./info.json', JSON.stringify(this), 'utf8');
  }
}

exports.Information = Information;
