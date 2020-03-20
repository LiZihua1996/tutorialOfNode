const http = require('http')
const fs = require('fs')
const path = require("path")

const server = http.createServer((request, response) => {
    // 在request对象中，可以获取请求的URL，通过URL判断请求的资源。
    console.log(request.url) 
    fs.readFile(path.resolve(__dirname, `./www${request.url}`), (error, buffer) => { // 根据URL查找读取相应的文件。
        if (error) { 
            // 若读取错误，则向前端返回404状态码，
            //以及内容Not Found。
            response.writeHead(404)
            response.write('Not Found')
        } else { 
            // 若读取成功，则向前端返回读取到的文件。
            response.write(buffer)
        }
        // 关闭连接。
        response.end() 
    })
})

server.listen(8080)