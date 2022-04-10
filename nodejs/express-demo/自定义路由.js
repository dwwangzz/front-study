/**
 * 模块化路由
 * (1) 创建路由模块对应的js文件
 * (2) 调用express.Router()函数创建路由对象
 * (3) 向路由对象上挂载具体的路由
 * (4) 使用module.exports向外共享路由对象
 * (5) 使用app.use()函数注册路由模块
 */
const express = require('express')

const router = express.Router()

router.get('/user/list', function(req, res) {
    res.send('Get user list')
})

router.post('/user/add', function(req, res) {
    res.send('Add new user')
})

module.exports = router

