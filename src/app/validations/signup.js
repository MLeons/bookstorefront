import validator from 'validator';
const isEmpty = require('lodash/isEmpty');

export default function validateInput(data) {
    let errors = {};

    if (validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if (validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if (validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if (!validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}


