const processInput = (input, form, logger, saveData) => {
  form.addInfo(input.trim());
  if (form.areAllDetailsFilled()) {
    saveData(form);
    logger('Thank You');
  } else {
    logger(form.getQuery());
  }
};

module.exports = { processInput };
