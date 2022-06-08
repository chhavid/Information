const processInput = (input, form) => {
  form.addInfo(input.trim());
  if (form.areAllDetailsFilled()) {
    console.log('Thank You');
    form.saveData();
    process.stdin.destroy();
  } else {
    console.log(form.getQuery());
  }
};

module.exports = { processInput };
