/**
 * 文件操作
 */
const fs = require('fs')
const path = require('path')

// 写文件
fs.writeFile('E:\\1.txt', 'xiao jiao jiao', function (err, data) {
    if (err) return console.log(err.message)
    console.log(data)
})


// 读文件
// fs.readFile('E:\\1.txt', 'utf-8', function (err, data) {
//     if (err) return console.log(err.message)
//     console.log(data)
// })

// 文件数据处理
// fs.readFile('./成绩.txt', 'utf-8', function (err, data) {
//     if (err) return console.log(err.message)
//     var arr = [];
//     var arrStr = data.split(' ')
//     for(var i in arrStr) {
//         var p = arrStr[i].split('=');
//         arr.push({
//             name: p[0],
//             score: p[1]
//         })
//     }
//     console.log(arr)
// })

// fs.readFile('E:\\学习\\front-study\\nodejs\\core\\成绩.txt', 'utf-8', function (err, data) {
//     if (err) return console.log(err.message)
//     var arr = [];
//     var arrStr = data.split(' ')
//     for(var i in arrStr) {
//         var p = arrStr[i].split('=');
//         arr.push({
//             name: p[0],
//             score: p[1]
//         })
//     }
//     console.log(arr)
// })

// fs.readFile(__dirname + "/成绩.txt", 'utf-8', function (err, data) {
//     if (err) return console.log(err.message)
//     var arr = [];
//     var arrStr = data.split(' ')
//     for(var i in arrStr) {
//         var p = arrStr[i].split('=');
//         arr.push({
//             name: p[0],
//             score: p[1]
//         })
//     }
//     console.log(arr)
// })

fs.readFile(path.join(__dirname,"../","core", "成绩.txt"), 'utf-8', function (err, data) {
    if (err) return console.log(err.message)
    var arr = [];
    var arrStr = data.split(' ')
    for(var i in arrStr) {
        var p = arrStr[i].split('=');
        arr.push({
            name: p[0],
            score: p[1]
        })
    }
    console.log(arr)
})

// fs.writeFile('E:\学习\front-study\nodejs\core\\', 'xiao jiao jiao', function (err, data) {
//     if (err) return console.log(err.message)
//     console.log(data)
// })

