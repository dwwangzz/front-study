const http = require('http')

const server = http.createServer()

server.on('request', (req, res) =>{
    console.log(`您请求的地址是：${req.url}， 请求的 method 类型：${req.method}`)

    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end('你好');
})

server.listen(80, (req, res)=>{
    console.log(`server running at http://127.0.0.1`)
})



