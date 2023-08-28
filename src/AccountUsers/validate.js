import Joi from "joi"

export const signUpValid = Joi.object({
    userName: Joi.string().required().min(6).max(255),
    fullName: Joi.string().required(),
    password: Joi.string().required().min(6).max(255),
    confirmPassword: Joi.valid(Joi.ref('password')).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    numberPhone: Joi.string().min(9).max(11).required(),
    avatar: Joi.string(),
    address: Joi.string(),
    role: Joi.string()
})

export const signInValid = Joi.object({
    userName:Joi.string().required(),
    password: Joi.string().required().min(6).max(255)
})