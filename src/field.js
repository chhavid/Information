class Field {
  #name;
  #prompt;
  #validator;
  #parser;
  #response;
  constructor(name, prompt, validator = () => true, parser = (text) => text) {
    this.#name = name;
    this.#prompt = prompt;
    this.#validator = validator;
    this.#parser = parser;
    this.#response = null;
  }

  getPrompt() {
    return this.#prompt;
  }

  #isValid(response) {
    return this.#validator(response);
  }

  fill(response) {
    if (!this.#isValid(response)) {
      throw { message: `invalid ${this.#name}` };
    }
    this.#response = response;
  }

  getResponse() {
    return { name: this.#name, response: this.#parser(this.#response) };
  }

  isFilled() {
    return this.#response !== null;
  }

  equals(anotherField) {
    return anotherField instanceof Field &&
      this.#name === anotherField.#name &&
      this.#prompt === anotherField.#prompt;
  }
}

exports.Field = Field;
