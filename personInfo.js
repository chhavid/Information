const fs = require('fs');

class Information {
  constructor() {
    this.name = '';
    this.dob = '';
    this.hobbies = [];
  }

  addName(name) {
    this.name = name.trim();
    this.#isNameValid();
  }

  addDob(dob) {
    this.dob = dob.trim();
    this.#isDobValid();
  }

  addHobbies(hobbies) {
    this.hobbies.push(hobbies.trim());
    this.#isHobbiesValid();
  }

  saveData() {
    fs.writeFileSync('./info.json', JSON.stringify(this), 'utf8');
  }

  #isNameValid() {
    if (this.name.length < 4) {
      return false;
    }
    return true;
  }

  #isDobValid() {
    const dobArray = this.dob.split('-');
    if (!dobArray.every((date) => isFinite(date))) {
      return false;
    }
    return dobArray[0].length === 4 && dobArray[1].length === 2 &&
      dobArray[2].length === 2;
  }

  #isHobbiesValid() {
    this.hobbies.length > 0;
  }
}

exports.Information = Information;
