const fs = require('fs');

class Form {
  constructor() {
    this.address = '';
  }

  addInfo(queryName, info, validateFn) {
    if (validateFn(info) === false) {
      return false;
    }

    if (queryName === 'hobbies') {
      this.hobbies = info.trim().split(',');
      return true;
    }
    if (queryName === 'address') {
      return this.addAddress(info);
    }
    this[queryName] = info.trim();
    return true;
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
}

exports.Form = Form;
