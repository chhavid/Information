class Form {
  #queries;
  #index;
  constructor(queries) {
    this.#queries = queries;
    this.#index = 0;
  }

  #incrementIndex() {
    this.#index++;
  }

  addInfo(info) {
    const query = this.#queries[this.#index];
    if (!query.isValid(info)) {
      return;
    }
    query.fill(info);
    if (query.isFilled()) {
      this.#incrementIndex();
    }
  }

  areAllDetailsFilled() {
    return this.#queries.every((query) => query.isFilled());
  }

  getFormDetails() {
    const details = {};
    this.#queries.forEach((query) => {
      details[query.getName()] = query.getResponse();
    });

    return JSON.stringify(details);
  }

  getQuery() {
    return this.#queries[this.#index].getPrompt();
  }
}

exports.Form = Form;
