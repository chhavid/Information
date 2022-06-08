const fs = require('fs');

class Form {
  constructor(queries) {
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

  addAddress(address) {
    if (this.formData.address) {
      this.formData.address += '\n' + address;
      return;
    }
    this.formData.address = address;
  }

  saveData() {
    fs.writeFileSync('./form.json', JSON.stringify(this.formData), 'utf8');
  }

  getQuery() {
    return this.queries[this.index].query;
  }
}

exports.Form = Form;
