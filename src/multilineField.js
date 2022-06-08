class MultilineField {
  #name;
  #prompts;
  #validator;
  #parser;
  #responses;
  constructor(name, prompts, validator, parser) {
    this.#name = name;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#parser = parser;
    this.#responses = [];
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }

  isValid(response) {
    return this.#validator(response);
  }

  fill(response) {
    this.#responses.push(response);
  }

  getName() {
    return this.#name;
  }

  parse(response) {
    return this.#parser(response);
  }

  getResponse() {
    return this.#responses.join('\n');
  }

  isFilled() {
    return this.#responses.length === this.#prompts.length;
  }
}

exports.MultilineField = MultilineField;
