/*
 * @Author: eay zhouhangms@163.com
 * @Date: 2022-05-26 12:14:23
 * @LastEditors: eay zhouhangms@163.com
 * @LastEditTime: 2022-05-26 17:27:54
 * @FilePath: \blog-express\router\user.js
 * @Description: 
 * 
 * Copyright (c) 2022 by eay zhouhangms@163.com, All Rights Reserved. 
 */
const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')
const expressJoi=require('@escook/express-joi');
const {userCheck}=require('../utils/check')


router.post('/register',expressJoi(userCheck),userController.registerController);


module.exports=router;