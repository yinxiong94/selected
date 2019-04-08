const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var sql="select*from sec_spxq where uid=?";
    var uid=req.query.uid;  
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
            res.send(result)
          
    });    
})

router.get("/cart",(req,res)=>{
    var uid=req.query.uid;
    var sql="select*from sec_spcar where uid in ("+uid+")";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


router.get("/addcart1",(req,res)=>{
    if(!req.session.phone){ 
        res.send({code:-1,data:[],msg:"请登录"});
        return;}
    var phone=req.session.phone;
    var pid=req.query.pid;
    var count=req.query.count;
    var uid=req.query.uid;
    var img_url=req.query.img_url;
    var title=req.query.title;
    var color=req.query.color;
    var price=req.query.price;
    var store=req.query.store;
    var size=req.query.size;      
    var sql="select id from sec_user where phone=?";
    pool.query(sql,[phone],(err,result)=>{
        if(err)throw err;
        var id=result[0].id;  
        pool.query("select*from sec_spcar where id=? and uid=?",[id,uid],(err,result)=>{
            if(err)throw err;
            if(result.length>0){
               pool.query(`UPDATE sec_spcar set count=count+${count} where uid=${uid}`,(err,result)=>{
                if(err)throw err;
                res.send(result)})
            }
            else {
                var sql1="insert into sec_spcar(id,uid,img_url,title,color,size,store,price,count,pid) values(?,?,?,?,?,?,?,?,?,?)";
            pool.query(sql1,[id,uid,img_url,title,color,size,store,price,1,pid],(err,result)=>{
                if(err)throw err;
                res.send(result)
            })}
        })
        
    })
})

router.get("/addcart2",(req,res)=>{
    if(!req.session.phone){ 
        res.send({code:-1,data:[],msg:"请登录"});
        return;}
    var phone=req.session.phone;
    var pid=req.query.pid;
    var uid=req.query.uid;
    var count=req.query.count;
    var img_url=req.query.img_url;
    var title=req.query.title;
    var color=req.query.color;
    var price=req.query.price;
    var store=req.query.store;
    var size=req.query.size;      
    var sql="select id from sec_user where phone=?";
    pool.query(sql,[phone],(err,result)=>{
        if(err)throw err;
        var id=result[0].id;  
        pool.query("select*from sec_spcar where id=? and uid=?",[id,uid],(err,result)=>{
            if(err)throw err;
            if(result.length>0){
               pool.query(`UPDATE sec_spcar set color='${color}',size='${size}',pid='${pid}',count='${count}' where uid=${uid}`,(err,result)=>{
                if(err)throw err;
                res.send(result)})
            }
            else {
                var sql1="insert into sec_spcar(id,uid,img_url,title,color,size,store,price,count,pid) values(?,?,?,?,?,?,?,?,?,?)";
            pool.query(sql1,[id,uid,img_url,title,color,size,store,price,count,pid],(err,result)=>{
                if(err)throw err;
                res.send(result)
            })}
        })
        
    })
})



router.get("/addcart",(req,res)=>{
    var phone=req.query.phone;
    var uid=req.query.uid;
    var img_url=req.query.img_url;
    var title=req.query.title;
    var color=req.query.color;
    var price=req.query.price;
    var store=req.query.store;
    var size=req.query.size;      
    var sql="select id from sec_user where phone=?";
    pool.query(sql,[phone],(err,result)=>{
        if(err)throw err;
        var id=result[0].id;  
        pool.query("select*from sec_spcar where id=? and uid=?",[id,uid],(err,result)=>{
            if(err)throw err;
            if(result.length>0){
               pool.query(`UPDATE sec_spcar set count=count+1 where uid=${uid}`,(err,result)=>{
                if(err)throw err;
                res.send(result)})
            }
            else {
                var sql1="insert into sec_spcar(id,uid,img_url,title,color,size,store,price,count) values(?,?,?,?,?,?,?,?,?)";
            pool.query(sql1,[id,uid,img_url,title,color,size,store,price,1],(err,result)=>{
                if(err)throw err;
                res.send(result)
            })}
        })
        
    })
})


module.exports=router;