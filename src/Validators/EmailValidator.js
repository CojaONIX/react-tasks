
const blockedEmails = [
    'admin@gmail.com',
    'test@gmail.com'
];

export const EmailValidator = {
    required: 'Email field is required',
    minLength: {
        value: 12,
        message: 'Email must have a minimum 12 characters'
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
    },
    validate: {
        gmailCheck: value => value.split('@')[1] === 'gmail.com' || 'Email must be: @gmail.com',
        blockedCheck: value => !blockedEmails.includes(value) || 'Email must be different than: ' + value
    }
};
