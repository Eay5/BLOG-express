const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.registerController = (req, res) => {
    let {
        userName,
        password,
        headImg
    } = req.body;
    if (!userName || !password) {
        return res.send({
            code: 1,
            msg: '用户名或者密码不能为空'
        })
    }
    // const sql = "insert into user (name,password,headImg) value ('老7','888','http://www.unraid.plus:90/gif/sqdzz.gif')"
    const userSelectSql = 'select * from user where name=?';

    db.query(userSelectSql, userName, (err, results) => {
        if (err) {
            return res.send({
                code: 1,
                msg: err.message
            });
        }
        if (results.length > 0) {
            return res.send({
                code: 1,
                msg: '用户名存在'
            })
        }

        password = bcrypt.hashSync(password, 10)
        const userInsertSql = 'insert into user (name,password,headImg)  values (?,?,?)'
        db.query(userInsertSql, [userName,
            password,
            headImg
        ], (err, results) => {
            if (err) return res.send({
                code: 1,
                msg: err.message
            });

            if (results.affectedRows !== 1) {
                return res.send({
                    code: 1,
                    msg: '注册失败'
                })
            }
           return res.send({
                code: 0,
                msg: '注册成功'
            })
        })
    })






}
exports.loginController=(req,res)=>{
    const {userName,password} = req.body;
   
    const userSelectSql='select * from user where name=?';
    da.query(userSelectSql,userName,(err,results)=>{

        if(err){
            return res.send({code:1,msg:err.message});
        }
        if(result.length===0){
            return res.send({code:1,msg:'账户不存在'})
        }
        const compareState=bcrypt.compareSync(password,results[0].password)
        if(!compareState){
            return res.send({code:1,msg:"密码错误"})
        }
        res.send({code:0,msg:'登陆成功'})
    })
}