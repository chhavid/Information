const isNameValid = (name) => name.length > 4;

const isphnNumValid = (phoneNum) => {
  return phoneNum.length === 10 && isFinite(phoneNum);
};

const isHobbiesValid = (hobbies) => {
  return hobbies.length > 0;
};

const isDobValid = (dob) => {
  return /^\d{4}-\d{2}-\d{2}$/.test(dob);
};

const isAddressValid = (address) => {
  return address.length > 0;
};

const identity = (info) => info.trim();

const parseHobbies = (hobbies) => hobbies.trim().split(',');

const parseAddress = (address) => '\n' + address;

const getQueries = () => [
  {
    name: 'name', query: 'Please enter your name',
    validator: isNameValid, parser: identity
  },
  {
    name: 'dob', query: 'Please enter your DOB(yyyy-mm-dd)',
    validator: isDobValid, parser: identity
  },
  {
    name: 'hobbies', query: 'Please enter your hobbies',
    validator: isHobbiesValid, parser: parseHobbies
  },
  {
    name: 'phoneNum', query: 'Please enter your phone number',
    validator: isphnNumValid, parser: identity
  },
  {
    name: 'address', query: 'Please enter your address line 1',
    validator: isAddressValid, parser: parseAddress
  },
  {
    name: 'address', query: 'Please enter your address line 2',
    validator: isAddressValid, parser: parseAddress
  }
];

exports.getQueries = getQueries;
