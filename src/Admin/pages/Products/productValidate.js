import Joi from "joi";

const productValidate = Joi.object({
    name: Joi.string().required().min(6).max(99),
    images: Joi.array().items(Joi.string().uri()),
    categoryId: Joi.string().required(),
    price: Joi.number().required().min(0),
    discount: Joi.number().min(0).max(100),
    brand: Joi.string(),
    quantify: Joi.number(),
    description: Joi.string()

})
export default productValidate