const validator = require("validator");
const PhoneNumber = require("awesome-phonenumber");

const getUsername = (str) => {
  let username;
  if (!str) {
    return undefined;
  }
  let input = str.toLowerCase();
  const isEmail = validator.isEmail(input);
  if (isEmail) {
    email = input;
    const emailName = email.substring(0, email.indexOf("@"));
    username = `${emailName.split(/[\s._]+/).join("-")}-${Date.now()}`;
  } else if (validator.isMobilePhone(input)) {
    const pn = new PhoneNumber(input);
    countryCode = `+${pn.getCountryCode()}`;
    phoneNumber = pn.getNumber("significant");

    if (!phoneNumber) {
      return undefined;
    }
    username = `${phoneNumber}-${Date.now()}`;
  } else {
    input.toString();
    username = `${input.split(/[\s._]+/).join("-")}-${Date.now()}`;
  }
  return username;
};

module.exports = getUsername;
