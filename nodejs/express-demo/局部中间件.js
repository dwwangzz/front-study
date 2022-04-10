/**
 * 局部中间件
 * 不使用app.use()注册，中间件直接注册到路由中
 */
const express = require('express')

const app = express()

const mw1 = function (req, res, next) {
    console.log('这是局部中间件1')
    // 把流转关系，转交给下一个中间件或路由
    next()
}

const mw2 = function (req, res, next) {
    console.log('这是局部中间件2')
    // 把流转关系，转交给下一个中间件或路由
    next()
}

app.get('/', mw1, function(req, res){
    res.send('hello world!')
})

// 注册多个局部中间件，写法一
app.get('/mw1', mw1, mw2, function(req, res){
    res.send('hello world!')
})
// 注册多个局部中间件，写法二
app.get('/mw2', [mw1, mw2], function(req, res){
    res.send('hello world!')
})

app.get('/user', function(req, res){
    res.send('hello user!')
})

app.listen(80, ()=>{
    console.log('express server running at http://127.0.0.1')
})
