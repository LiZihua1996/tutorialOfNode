const http = require("http")
const childProcess = require("child_process")
const host = "127.0.0.1"
const port = 7777

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello, Node")
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${host}:${port}`)
    childProcess.exec(`start http://${hostname}:${port}/`)
})