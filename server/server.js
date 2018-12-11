const express = require('express') // 引入
const mongoose = require('mongoose') // 引入库
//连接 mongodb 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL) // 连接地址
mongoose.connection.on('connected',function () {
    console.log('连接数据库成功')
})
// 类似于 mysql 的表 mongo里有文档,字段概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type:Number, require: true}
}))
// 新增数据
User.create({
    user: "小华",
    age: 18
},function (err, doc) {
    // 新建之后打印的信息
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})

// // 更新数据
// User.update({'user':'小米'},{'$set': {age:26}},function (err, doc) {
//     console.log(doc)
//     // 更新小米的年龄
// })

// 删除数据
// User.remove({age:18},function (err, doc){
//     // 删除 age 是 18 的
//     console.log(doc)
// })
const app = express() // 新建
app.get('/', function (req, res) {
    res.send('<h1>hello word</h1>')
    // send 返回 html格式
})
app.get('/data', function (req, res) {
    // res.json({name: "imooc",type: 'it'})
    // json 返回 json格式数据
    // 查询数据 全部
    // User.find({},function(err,doc) {
    //     return res.json(doc)
    // })
    // 条件查询
    // User.find({user: 'xiaomi'},function(err,doc) {
    //     return res.json(doc)
    // })
    // 只查找一条
    User.findOne({user: 'xiaomi'},function(err,doc) {
        return res.json(doc)
    })
})
// app.get('/delete', function () {})  删除接口
app.listen(9093, function () { // 打开监听
    console.log('监听成功')
})