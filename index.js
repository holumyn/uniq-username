import validator from "validator";
import PhoneNumber from "awesome-phonenumber";

const getUsername = (input) => {
  let username;

  if (!input) {
    return undefined;
  }
  const isEmail = validator.isEmail(input);
  if (isEmail) {
    email = input;
    username = `${email.substring(0, email.indexOf("@"))}-${Date.now()}`;
  } else if (validator.isMobilePhone(input)) {
    const pn = new PhoneNumber(input);
    countryCode = `+${pn.getCountryCode()}`;
    phoneNumber = pn.getNumber("significant");
    username = `${phoneNumber}-${Date.now()}`;
  }
  return username;
};

module.exports = getUsername;
