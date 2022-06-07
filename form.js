const fs = require('fs');

class Form {
  constructor() {
    this.address = '';
  }

  addInfo(queryName, info, parser, validateFn) {
    if (validateFn(info) === false) {
      return false;
    }
    if (queryName === 'address') {
      return this.addAddress(info);
    }
    this[queryName] = parser(info);
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
