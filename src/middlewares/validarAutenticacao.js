const { request } = require("http")
const { verify } = require("jsonwebtoken")

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @param {import ("express").NextFunction} next 
 * @returns 
 */
function validarAutenticacao(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ message: "Token não informado" })
    }

    const [, token] = authorization.split(" ")

    try {
        const decoded = verify( token, process.env.JWT_SECRET)

        const {sub, permissao} = decoded
     
        req.usuario = {
            id: sub,
            permissao
        }

        next()
    } catch (error) {
        return res.status(401).json({ message: "Token não informado" })
    }
}

/**
 * Middleware para garantir que o usuário tenha uma permissão específica
 * @param {string} permissaoParametro
 * @returns {import('express').RequestHandler}
 */
function validarAutenticacaoRBAC(permissaoParametro) {
    console.log(permissaoParametro)
    return (req, res, next) => {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ message: "Token não informado" });
        }

        const [, token] = authorization.split(' ');

        try {
            const decoded = verify(token, process.env.JWT_SECRET);

            const { sub, permissao } = decoded;

            if (permissao !== permissaoParametro) {
                return res.status(403).json({ message: "Usuário não possui permissão para essa operação" });
            }

            req.usuario = {
                id: sub,
                permissao
            };
            next();
        } catch (error) {
            return res.status(401).json({ message: "Token inválido" });
        }
    };
}

module.exports = { validarAutenticacao,validarAutenticacaoRBAC }