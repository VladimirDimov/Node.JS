module.exports = {
    validateLength: function (val, minLength, maxLength, name) {
        if(val.length < minLength || val.length > maxLength) {
           throw `${name} length must be between ${minLength} and ${maxLength} characters!`;
        };
    }
};