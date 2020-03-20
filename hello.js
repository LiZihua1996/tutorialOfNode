const http = require("http")
const childProcess = require("child_process")   //内置模块,用于创建子进程
const host = "127.0.0.1"
const port = 7777

const server = http.createServer((req, res) => {    //响应请求
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    response.write('a')
    response.write('b')//通常使用response.write方法向前端返回数据，该方法可调用多次，返回的数据会被拼接到一起
    response.write('c')//需要注意的是，必须调用response.end方法结束请求，否则前端会一直处于等待状态
    res.end("Hello, Node")
})

server.listen(port, hostname, ()=>{ 监听端口,并设置回调函数
    console.log(`Server running at http://${host}:${port}`)
    childProcess.exec(`start http://${hostname}:${port}/`)  //在浏览器中打开
})