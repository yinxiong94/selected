//ʹ��express����web������ --11:25
const express = require('express');
const bodyParser = require('body-parser');
const session=require("express-session")
const cors=require("cors")
/*����·��ģ��*/
const index=require("./routes/index_route");
const details=require("./routes/details-toute");
const sp=require("./routes/sp-toute");
const mysql=require("mysql")
const spxq=require("./routes/spxq-toute");
const login=require("./routes/login-toute");
const cart=require("./routes/cart-toute");
var app = express();
var server = app.listen(3000);
//ʹ��body-parser�м��
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60
    }
}))
app.use(cors({
  origin:['http://localhost:8080',
	  'http://127.0.0.1:8080'],
  credentials:true
}));
//�йܾ�̬��Դ��publicĿ¼��
app.use(express.static('public'));
/*ʹ��·����������·��*/
app.use("/index",index);
app.use("/details",details);
app.use("/sp",sp);
app.use("/spxq",spxq);
app.use("/login",login);
app.use("/cart",cart)

app.get("/getcart",(req,res)=>{
    if(!req.session.uid){
        res.send({code:-1,data:[],msg:"请登录"});
        return;
    }
    var uid=req.session.uid;
    var sql="select*from xz_cart where uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
})
