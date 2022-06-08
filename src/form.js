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
    if (!query.isValid(info)) {
      return;
    }
    if (query.getName() === 'address') {
      this.addAddress(info);
      this.incrementIndex();
      return;
    }
    this.formData[query.getName()] = query.parse(info);
    this.incrementIndex();
  }

  areAllDetailsFilled() {
    return this.index >= this.queries.length;
  }

  addAddress(address) {
    if (this.formData.address) {
      this.formData.address += '\n' + address;
      return;
    }
    this.formData.address = address;
  }

  saveData(fs) {
    fs.writeFileSync('./form.json', JSON.stringify(this.formData), 'utf8');
  }

  getQuery() {
    return this.queries[this.index].getPrompt();
  }
}

exports.Form = Form;
