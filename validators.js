const validateDate = (date) => {
  return date.length === 2 && isFinite(date);
};
const validateMonth = (month) => {
  return month.length === 2 && isFinite(month);
};
const validateYear = (year) => {
  return year.length === 4 && isFinite(year);
};

const isNameValid = (name) => name.length > 3;

const isphnNumValid = (phoneNum) => {
  return phoneNum.trim().length === 10 && isFinite(phoneNum.trim());
};

const isHobbiesValid = (hobbies) => {
  if (hobbies === '\n') {
    return false;
  }
  return hobbies.length > 0;
};

const isDobValid = (dob) => {
  const dobArray = dob.trim().split('-');
  if (dobArray.length !== 3) {
    return false;
  }
  const [year, month, date] = dobArray;
  return validateYear(year) && validateMonth(month) &&
    validateDate(date);
};

const isAddressValid = (address) => {
  return address;
};

exports.isNameValid = isNameValid;
exports.isAddressValid = isAddressValid;
exports.isDobValid = isDobValid;
exports.isHobbiesValid = isHobbiesValid;
exports.isphnNumValid = isphnNumValid;