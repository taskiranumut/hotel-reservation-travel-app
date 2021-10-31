import {
  required,
  minLength,
  email,
  numeric,
  minValue,
  helpers,
} from "vuelidate/lib/validators";

const checkHesNumber = helpers.regex(
  "checkHesNumber",
  /^[A-Za-z][0-9][A-Za-z][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g
);

const checkPhoneNumber = helpers.regex(
  "checkPhoneNumber",
  /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/
);

const checkTcNumber = helpers.regex(
  "checkTcNumber",
  /^[1-9]{1}[0-9]{9}[02468]{1}$/
);

export const validation = {
  validations: {
    infoForm: {
      firstName: {
        required,
        minLength: minLength(2),
      },
      lastName: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      phoneNumber: {
        required,
        numeric,
        checkPhoneNumber,
      },
      age: {
        required,
        numeric,
        minValue: minValue(6),
      },
      tcNumber: {
        required,
        numeric,
        checkTcNumber,
      },
      hesNumber: {
        required,
        checkHesNumber,
      },
      gender: {
        required,
      },
    },
  },
};

// hes kodu: G4X9168315
