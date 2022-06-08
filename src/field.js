class Field {
  #name;
  #prompt;
  #validator;
  #parser;
  #response;
  constructor(name, prompt, validator, parser) {
    this.#name = name;
    this.#prompt = prompt;
    this.#validator = validator;
    this.#parser = parser;
    this.#response = null;
  }

  getPrompt() {
    return this.prompt;
  }

  isValid(response) {
    return this.validator(response);
  }

  fill(response) {
    if (this.isValid(response)) {
      throw 'error';
    }
    this.#response = response;
  }
}

exports.Field = Field;
