/*
 * @Author: eay zhouhangms@163.com
 * @Date: 2022-05-26 17:21:49
 * @LastEditors: eay zhouhangms@163.com
 * @LastEditTime: 2022-05-26 17:28:21
 * @FilePath: \blog-express\utils\check.js
 * @Description: 
 * 
 * Copyright (c) 2022 by eay zhouhangms@163.com, All Rights Reserved. 
 */
const joi=require('joi')

const username=joi.string().pattern(/^[\s]{1,6}$/).required();
const password=joi.string().pattern(/^[\s]{6,15}$/).required();



exports.userCheck={body:{username,password}}