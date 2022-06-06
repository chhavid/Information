const fs = require('fs');

class Information {
  constructor() {
    this.name = [];
    this.dob = [];
    this.hobbies = [];
  }

  addName(name) {
    this.name = name.trim();
    return this.#isNameValid();
  }

  addDob(dob) {
    this.dob = dob.trim();
    return this.#isDobValid();
  }

  addHobbies(hobbies) {
    this.hobbies.push(hobbies.trim());
    return this.#isHobbiesValid();
  }

  addPhnNo(number) {
    this.phoneNum = number.trim();
    return this.#isphnNumValid();
  }

  saveData() {
    fs.writeFileSync('./info.json', JSON.stringify(this), 'utf8');
  }

  #isNameValid() {
    return this.name.length > 3;
  }

  #isDobValid() {
    return /^\d\d\d\d-\d\d-\d\d$/.test(this.dob);
  }

  #isHobbiesValid() {
    if (this.hobbies[0] === '') {
      this.hobbies.pop();
      return false;
    }
    return this.hobbies.length > 0;
  }

  #isphnNumValid() {
    return this.phoneNum.length === 10 && isFinite(this.phoneNum);
  }
}

exports.Information = Information;
