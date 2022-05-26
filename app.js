/*
 * @Author: eay zhouhangms@163.com
 * @Date: 2022-05-26 12:05:36
 * @LastEditors: eay zhouhangms@163.com
 * @LastEditTime: 2022-05-26 17:38:31
 * @FilePath: \blog-express\app.js
 * @Description: 
 * 
 * Copyright (c) 2022 by eay zhouhangms@163.com, All Rights Reserved. 
 */
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const userRouter = require('./router/user');
const joi = require('joi');
//解析参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//手动跨域
// 全局 中间件  解决所有路由的 跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
})
//配置cors跨域
// app.use(cors())

app.use('/user', userRouter);

app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) {
        return res.send({
            status: 1,
            msg: err.message
        })
    }
    res.send({
        status: 1,
        msg: err.message
    })
})
app.listen(3000, () => {
    console.log("服务启动在http://127.0.0.1:3000")
})