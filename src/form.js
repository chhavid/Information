class Form {
  #fields;
  #index;
  constructor(fields) {
    this.#fields = fields;
    this.#index = 0;
  }

  #incrementIndex() {
    this.#index++;
  }

  addField(response) {
    const field = this.#fields[this.#index];
    field.fill(response);
    if (field.isFilled()) {
      this.#incrementIndex();
    }
  }

  areAllDetailsFilled() {
    return this.#fields.every((field) => field.isFilled());
  }

  getFormDetails() {
    const details = {};
    this.#fields.forEach((field) => {
      const { name, response } = field.getResponse();
      details[name] = response;
    });

    return JSON.stringify(details);
  }

  getCurrentPrompt() {
    return this.#fields[this.#index].getPrompt();
  }

  equals(anotherForm) {
    return anotherForm instanceof Form &&
      this.#fields[this.#index].equals(anotherForm.#fields[anotherForm.#index]);
  }
}

exports.Form = Form;
