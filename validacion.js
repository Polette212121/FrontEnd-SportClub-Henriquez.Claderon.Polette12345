// Validacion 

const Validations = {
    email: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    password: (password) => {
        return password && password.length >= 8;
    },

    passwordMatch: (password, confirmPassword) => {
        return password === confirmPassword;
    },

    required: (value) => {
        return value && value.trim() !== '';
    },

    minLength: (value, length) => {
        return value && value.length >= length;
    },

    maxLength: (value, length) => {
        return value && value.length <= length;
    },

    phone: (phone) => {
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return phoneRegex.test(phone);
    },

    date: (date) => {
        return !isNaN(Date.parse(date));
    }
};