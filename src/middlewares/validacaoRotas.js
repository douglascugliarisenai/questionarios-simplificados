const { types } = require("pg")

/**
 * 
 * @param {import("yup").ObjectSchema} schema 
 * @returns {import ("express").RequestHandler}
 */
function validarSchema(schema) {
    return async (req, res, next) => {
        try {
            await schema.validate({
                body: req.body,
                query: req.query,
                params: req.params
            })

            next()

        } catch (error) {
            return res.status(400).json({ type: error.name, message: error.message })
        }
    }
}

module.exports = {
    validarSchema
}