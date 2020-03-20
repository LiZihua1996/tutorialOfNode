const fs = require('fs')
//fs.writeFile可向文件写入信息，若文件不存在会自动创建
fs.writeFile("./test,txt", "text", err => {
    if (err) {
        console.log("Write error")
    } else {
        console.log("Write successed")
    }
})

fs.readFile('./test.txt', (error, data) => {
    if (error) {
        console.log('文件读取失败', error)
    } else {
        // 此处因确定读取到的数据是字符串，可以直接用toString方法将Buffer转为字符串。
        // 若是需要传输给浏览器可以直接用Buffer，机器之间通信是直接用Buffer数据。
        console.log('文件读取成功', data.toString())
    }
})