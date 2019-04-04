const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.post("/",(req,res)=>{
	var $phone=req.body.phone;
    var $upwd=req.body.upwd;
    if(!$phone){res.send("请输入手机号");return}
    var sql="select*from sec_user where phone=?";
pool.query(sql,[$phone],(err,result)=>{
    if(err)throw err;
    if(result==""){
        var sql1="insert into sec_user values(null,?,?)"
        pool.query(sql1,[$phone,$upwd],(err,result)=>{
            if(err)throw err;  
            req.session.phone=$phone;
            res.send({code:1,msg:result})
        })
    }
    else {pool.query("select*from sec_user where phone=? and upwd=?",[$phone,$upwd],(err,result)=>{
        if(err)throw err;
        if(result==""){res.send("密码不正确")}
        else {
            req.session.phone=$phone;
            res.send({code:1,msg:result})}
    })}
})
})

module.exports=router;