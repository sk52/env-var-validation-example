const Joi = require('joi');

function validateConfig(envVars) {
    const envSchema = Joi.object().keys({
        PORT: Joi.number().required(),
        CLIENT_ID: Joi.string().required(),
    }).unknown();
    
    const { error } = envSchema.validate(envVars);

    if (error) {
        const errorMessages = error.details.reduce((acc, curr) => {
            acc.push(curr.message); 
            return acc;
        }, []);
        
        throw new Error(`Env var config validation error: ${JSON.stringify(errorMessages)}`);
    }
}

exports.validateConfig = validateConfig;