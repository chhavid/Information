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
    this.address = '';
  }

  addInfo(queryName, info) {
    if (queryName === 'hobbies') {
      this.hobbies = info.trim().split(',');
      return;
    }
    this[queryName] = info.trim();
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
    fs.writeFileSync('./form.json', JSON.stringify(this), 'utf8');
  }

  isNameValid() {
    return this.name.length > 3;
  }

  isDobValid() {
    const dobArray = this.dob.split('-');
    if (dobArray.length !== 3) {
      return false;
    }
    const [year, month, date] = dobArray;
    return validateYear(year) && validateMonth(month) && validateDate(date);
  }

  isHobbiesValid() {
    if (this.hobbies[0] === '') {
      this.hobbies.pop();
      return false;
    }
    return this.hobbies.length > 0;
  }

  isphnNumValid() {
    return this.phoneNum.length === 10 && isFinite(this.phoneNum);
  }
}

exports.Form = Form;
