
const joi = require('joi');

const usersShema = joi.object({
    name: joi.string().min(1).required(),
    surname: joi.string().min(1).required(),
    age: joi.number().min(0).required(),
    city: joi.string(),
});

module.exports.usersShema = usersShema;