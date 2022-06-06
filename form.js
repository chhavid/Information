const fs = require('fs');

const validateDate = (date) => {
  return date.length === 2 && isFinite(date);
};
const validateMonth = (month) => {
  return month.length === 2 && isFinite(month);
};
const validateYear = (year) => {
  return year.length === 4 && isFinite(year);
};

class Form {
  constructor() {
    this.name = '';
    this.dob = '';
    this.hobbies = '';
    this.phoneNum = '';
    this.address = '';
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
    this.hobbies = hobbies.trim().split(',');
    return this.#isHobbiesValid();
  }

  addPhnNo(number) {
    this.phoneNum = number.trim();
    return this.#isphnNumValid();
  }

  addAddress(line) {
    if (line === '\n') {
      return false;
    }
    const address = this.address + '\n' + line;
    this.address = address.trim();
    return true;
  }

  saveData() {
    fs.writeFileSync('./info.json', JSON.stringify(this), 'utf8');
  }

  #isNameValid() {
    return this.name.length > 3;
  }

  #isDobValid() {
    const dobArray = this.dob.split('-');
    if (dobArray.length !== 3) {
      return false;
    }
    const [year, month, date] = dobArray;
    return validateYear(year) && validateMonth(month) && validateDate(date);
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

exports.Form = Form;
