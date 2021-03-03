const validator = require("validator");
const PhoneNumber = require("awesome-phonenumber");

const getUsername = (input) => {
  let username;
  if (!input) {
    return undefined;
  }
  input.toLowerCase();
  const isEmail = validator.isEmail(input);
  if (isEmail) {
    email = input;
    username = `${email.substring(0, email.indexOf("@"))}-${Date.now()}`;
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
    username = `${input.split(" ").join("-")}-${Date.now()}`;
  }
  return username;
};

module.exports = getUsername;
