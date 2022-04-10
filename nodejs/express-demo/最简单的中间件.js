/**
 * 注意事项：
 * 1. 一定要在路由之前注册中间件
 * 2. 客户端发送过来的请求，可以连续调用多个中间件处理
 * 3. 中间件函数调用最后别忘了调用next()函数
 * 4. 为了防止代码逻辑混乱，别在调用next()函数之后在写逻辑代码了
 * 5. 连续调用多个中间件时，多个中间件直接共享req和res对象
 */
const express = require('express')

const app = express()

// 定义一个最简单的中间件函数
const mw = function (req, res, next) {
    console.log('这是最简单的中间件')
    // 把流转关系，转交给下一个中间件或路由
    next()
}


app.listen(80, ()=>{
    console.log('express server running at http://127.0.0.1')
})
