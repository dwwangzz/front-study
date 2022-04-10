const express = require('express')

const app = express()

app.listen(80, ()=>{
    console.log('express server running at http://127.0.0.1')
})

app.get('/getUser', function(req, res){
    // ?name=张三&age=20
    console.log(req.query.name)
    console.log(req.query.age)

    res.send('hello getUser!')
})

/**
 * :id为动态参数
 */
app.get('/getUser/:id', function(req, res){
    console.log(req.params.id)
    res.send(req.params)
})

app.post('/postUser', function(req, res){
    res.send('hello postUser!')
})

/**
 * 托管静态资源, 访问public文件夹中的静态资源
 */
app.use(express.static('public'))
// app.use(express.static('./public'))
// 先配置的public，先找public文件夹，如果没有的话，找files文件夹
app.use(express.static('files'))
// 指定访问前缀
app.use('/static', express.static('static'))


/**
 * 使用自定义路由
 */
const router = require('./自定义路由')
// app.use(router)
// 给路由添加前缀
app.use('/api', router)


