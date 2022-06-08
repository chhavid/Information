const processInput = (input, form, logger, saveData) => {
  form.addField(input.trim());
  if (form.areAllDetailsFilled()) {
    saveData(form);
    logger('Thank You');
  } else {
    logger(form.getCurrentPrompt());
  }
};

module.exports = { processInput };
