const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  else {
    return 'Please enter a string that is greater than 1 and less than 10 in length';
  }
};

module.exports = stringLength