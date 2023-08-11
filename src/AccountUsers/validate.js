// import Joi from "joi"

// export const signUpValid = Joi.object({
//     userName: Joi.string().min(6).max(255).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).max(255).required(),
//     confirmPassword: Joi.valid(Joi.ref('password')).required(),
//     fullName: Joi.string(),
//     avatar: Joi.string(),
//     numberPhone: Joi.string().min(9).max(11),
//     address: Joi.string(),
//     role: Joi.string()
// })

// // export default signUpValid
// export const signInValid = Joi.object({
//     userName: Joi.string().required(),
//     password: Joi.string().required().min(6).max(255)
// })