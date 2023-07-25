import Joi from "joi";

const productValidate = Joi.object({
    name: Joi.string().required().min(6).max(99),
    images: Joi.array().items(Joi.string().uri()),
    category: Joi.string(),
    price: Joi.number().required().min(0),
    discount: Joi.number().min(0).max(100),
    quantify: Joi.number(),
    description: Joi.string().max(500)

})
export default productValidate