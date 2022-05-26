/*
 * @Author: eay zhouhangms@163.com
 * @Date: 2022-05-26 12:23:04
 * @LastEditors: eay zhouhangms@163.com
 * @LastEditTime: 2022-05-26 14:30:13
 * @FilePath: \blog-express\config\db.js
 * @Description: 
 * 
 * Copyright (c) 2022 by eay zhouhangms@163.com, All Rights Reserved. 
 */
const mysql=require('mysql')

const db =mysql.createPool({
    host:"www.unraid.plus",
    port:'3306',
    user:"root",
    password:"eay123@",
    database:"blog" 
})

module.exports=db