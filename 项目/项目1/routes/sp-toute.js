const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
   var sql="SELECT * FROM sec_sp" ;
   pool.query(sql,[],(err,result)=>{
       if(err) throw err;
       res.send(result)
   })
})

router.get("/sss",(req,res)=>{
    var text=req.query.a;
    var sql=`select*from sec_sp where title like "%${text}%"`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
        res.write(JSON.stringify(result));
        res.end();
    })
})

router.get("/gwc",(req,res)=>{
    var phone=req.query.phone;
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

module.exports=router;