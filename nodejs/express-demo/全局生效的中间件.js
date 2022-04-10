/**
 * 中间件的作用：
 * 多个中间件之间，共享同一份req和res。基于这样的特征，我们可以在上游中间件统一为req和res对象添加自定义的属性或者方法，供下右中间件或者路由使用。
 */
const express = require('express')

const app = express()

// 定义一个最简单的中间件函数
const mw = function (req, res, next) {
    // 获取到请求达到服务器的时间
    const time = Date.now()
    // 为req对象挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time

    console.log('这是最简单的中间件')
    // 把流转关系，转交给下一个中间件或路由
    next()
}

// 全局生效中间件
app.use(mw)

// 全局中间件简化步骤
app.use((req, res, next) => {
    console.log('这是最简单的中间件2')
    // 把流转关系，转交给下一个中间件或路由
    next()
})

app.get('/', function(req, res){
    console.log(`hello world! ${req.startTime}`)
    res.send('hello world!')
})

app.listen(80, ()=>{
    console.log('express server running at http://127.0.0.1')
})
