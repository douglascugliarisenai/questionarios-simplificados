const LoginServices = require('./login.services')

class LoginControllers {

    async createLogin(req, res) {
        try {
            const { body } = req
            const login = await LoginServices.createLogin(body)

            if (login.message) {
                return res.status(400).json({ message: login.message })
            }

            return res.status(200).json(login)

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }

    }

}

module.exports = new LoginControllers()