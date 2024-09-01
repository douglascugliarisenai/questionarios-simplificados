const swaggerAutogen = require('swagger-autogen')()
const outputFile = 'src/config/docs/swagger.json'
const endpointsFiles = ['src/routes/routes.js']

const doc = {
    info: {
        title: "API de Questionários e Respostas",
        description: "API de Questionários e Respostas",
        version: "1.0.0",
    },
    host: "localhost:3000",
    schemes: ["http"],
    security: [{ apiKeyAuth: [] }],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description: "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        },
    },
}

swaggerAutogen(outputFile, endpointsFiles, doc)

