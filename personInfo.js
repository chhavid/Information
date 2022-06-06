const fs = require('fs');

class Information {
  constructor() {
    this.name = '';
    this.dob = '';
    this.hobbies = [];
  }

  addName(name) {
    this.name = name.trim();
  }
  addDob(dob) {
    this.dob = dob.trim();
  }
  addHobbies(hobbies) {
    this.hobbies.push(hobbies.trim());
  }

  saveData() {
    fs.writeFileSync('./info.json', JSON.stringify(this), 'utf8');
  }
}

exports.Information = Information;
