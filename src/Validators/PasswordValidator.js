
export const PasswordValidator = {
    required: 'Password field is required',
    minLength: {
        value: 6,
        message: 'Password must have a minimum 6 characters'
    },
    maxLength: {
        value: 16,
        message: 'Password must have a maximum 16 characters'
    },
    validate: {
        capitalLetterCheck: value => /[A-Z]/.test(value) || 'Password must include capital letter(s)',
        lowercaseLetterCheck: value => /[a-z]/.test(value) || 'Password must include lowercase letter(s)',
        numberCheck: value => /[0-9]/.test(value) || 'Password must include number(s)',
        specialLetterCheck: value => /[!@#$%^&*]/.test(value) || 'Password must include !@#$%^&* character(s)',
    }
};

