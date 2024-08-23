// CommonJS = require("module")
// ESModule = import("module")

const http = require("http")

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === "GET" && url === "/usuarios") {
        return res.end("Lista de ususuários")
    }

    res.end("Hello World")
})

const port = 3000
const hostname = "localhost"

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})