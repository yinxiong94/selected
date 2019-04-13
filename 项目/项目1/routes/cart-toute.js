const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    if(!req.session.phone){ 
        res.send({code:-1,data:[],msg:"请登录"});
        return;}
    var phone=req.session.phone;
    var sql="select id from sec_user where phone=?";
    pool.query(sql,[phone],(err,result)=>{
       if(err)throw err;
        var id=result[0].id;
        var sql1="select*from sec_spcar where id=?";
        pool.query(sql1,[id],(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    })
})

router.get("/1",(req,res)=>{
    var phone=13875873502;
    var sql="select id from sec_user where phone=?";
    pool.query(sql,[phone],(err,result)=>{
       if(err)throw err;
        var id=result[0].id;
        var sql1="select*from sec_spcar where id=?";
        pool.query(sql1,[id],(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    })
})

router.get("/del",(req,res)=>{
    var fid=req.query.fid;
    console.log(fid)
    var sql="delete from sec_spcar where fid=?";
    pool.query(sql,[fid],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

module.exports=router;