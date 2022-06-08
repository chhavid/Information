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
      details[field.getName()] = field.getResponse();
    });

    return JSON.stringify(details);
  }

  getCurrentPrompt() {
    return this.#fields[this.#index].getPrompt();
  }
}

exports.Form = Form;
