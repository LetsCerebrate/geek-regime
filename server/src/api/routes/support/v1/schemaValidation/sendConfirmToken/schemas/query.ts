import Joi from "@hapi/joi";

export default Joi.object().keys({
    email: Joi.string(),
    token: Joi.string()
}).or("email", "token");
