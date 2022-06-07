const fs = require('fs');

class Form {
  constructor(queries) {
    this.address = '';
    this.queries = queries;
    this.index = 0;
    this.formData = {};
  }

  incrementIndex() {
    this.index++;
  }

  addInfo(info) {
    const query = this.queries[this.index];
    if (!query.validator(info)) {
      return;
    }
    if (query.name === 'address') {
      this.addAddress(info);
      this.incrementIndex();
      return;
    }
    this.formData[query.name] = query.parser(info);
    this.incrementIndex();
  }

  areAllDetailsFilled() {
    return this.index > 5;
  }

  addAddress(line) {
    if (line === '\n') {
      return false;
    }
    const address = this.address + '\n' + line;
    this.address = address.trim();
    this.formData.address = this.address;
    return true;
  }

  saveData() {
    fs.writeFileSync('./form.json', JSON.stringify(this.formData), 'utf8');
  }

  displayQuery() {
    console.log(this.queries[this.index].query);
  }
}

exports.Form = Form;
