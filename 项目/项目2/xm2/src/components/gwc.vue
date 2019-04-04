<template>
    <div class="gwc">
        <div class="hed">
            <div class="header">
                <div class="box1" @click="gospfl">
                    <router-link to="">
                        <img src="../img/1.png" alt="">
                    </router-link>
                </div> 
                <div class="box5">
                    <router-link to="">
                        <img src="../img/getPosition.e5feda3.png" alt="">
                    </router-link>
                </div>
                <div class="box2" @click="gohome"> 
                    <router-link to="">
                        <img src="../img/SELECTED.png" alt="">
                    </router-link>
                </div>
                <div class="box3" @click="login_gwc">
                    <router-link to="">
                        <img src="../img/25.png" alt="">
                    </router-link>
                </div>
                <div class="box4">
                    <router-link to="">
                        <img src="../img/4.png" alt="">
                    </router-link>
                </div>       
            </div>
        </div>

        <div class="fh" >
            <a href="javascript:history.go(-1)">
                <img src="../img/下载1.png" alt="">
            </a>
        </div>

        <div class="gwc-list" v-if="ishide">
            <img src="../img/bag.247efd4.png" alt="">
            <p> 亲，您还没有添加购物清单哦~ </p>
        </div>

        <div class="gwc-list1" v-if="isshow">
            <ul style="padding:0;margin:0;border:0" id="123">
                <li style="display:flex;margin-bottom:5px" v-for="item of list" :data-id="item.fid" :data-uid="item.uid">                    
                    <div class="check" @click="check" data-i="0">
                        <input type="checkbox" style="margin: auto" class="1">
                    </div>
                    <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="" style="width:20%;height:20%;margin:auto 10px">
                    <div class="cartinfo">
                        <p>{{item.title}}</p>
                        <p>{{item.pid}}</p>
                        <p>{{item.color}}</p>
                        <p>{{item.size}}</p>
                        <span>{{item.count}}</span>
                        <span>&nbsp&nbsp&nbsp ￥449.5</span>
                        <div class="xg" @click="show"></div>
                    </div>                   
                    <div class="del" @click="del"></div>  
                </li>
                <div class="clearfix"></div>
            </ul>
        </div>

        <div class="sizebox2" v-if="isshow2">
            <div style="width:94%;margin:auto;background:#fff">
                <div class="close" @click="hide"></div>
                <img :src="'http://127.0.0.1:3000/'+arr[0]" alt="" style="width:24%;margin-top:20px">
                <p style="font-size:13px;color:#000">{{title}}</p>
                <div class="price">
                    <span style="color:red">￥{{price}}</span>
                    <span style="color:#a9a7a7;text-decoration: line-through;">￥{{price1}}</span>
                </div>
                <div class="color">
                    <ul id="color">
                        <li @click="color1" v-for="item of color">{{item}}</li>
                    </ul>
                </div>
                <div class="size">
                    <ul>
                        <li @click="size" v-for="item of sz">{{item}}</li>
                    </ul>
                </div>
                <div class="jj">
                    <div class="jia" @click="jia">
                        <button>-</button>
                    </div>
                    <div style="width:50%;float:left">1
                    </div>
                    <div class="jian" @click="jian">
                        <button>+</button>
                    </div>
                </div>               
                <div class="kc">库存：{{store}}</div>    
                <div class="clearfix"></div>           
            </div>
            <mt-button size="large" style="background:#000;border-radius:0;color:#fff " @click="jrgwc">确认购买</mt-button>
        </div>

        <div class="dbnav" v-if="isshow1">
            <ul>
                <li style="width:25%">
                    <input type="checkbox" style="margin-right:15px" id="all" @click="all">
                    <span>全选</span> 
                </li>
                <li style="width:35%" id="zj">合计：￥0</li>
                <li style="width:40%">
                    <mt-button style="background:#000;color:#fff;width:100%;height:46px;border-radius:0;font-size: 12px">购买结算</mt-button>
                </li>
                <div class="clearfix"></div>
            </ul>            
        </div>

    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
    data() {
        return {
            isshow:false,
            ishide:true,
            isshow2:false,
            isshow1:true,
            list:[],
            uid:"",
            sz:[],
            arr:[],
            list1:[],
            title:"",
            price:"",
            price1:"",
            pid:"",
            color:[],
            store:"",
            count:""
        }
    },
    methods: {
        all(){
            var a=document.getElementById("all").checked;
            if(a==true){
                var c=0;
                var b=document.getElementsByClassName("1")
                for(var i=0;i<b.length;i++){
                    b[i].checked=true;
                
                     var sl=b[i].parentElement.nextElementSibling.nextElementSibling.children;
                var sl1=sl[4].innerHTML;
                var price=sl[5].innerHTML.split("￥")[1];
                c+=sl1*price;
                document.getElementById("zj").innerHTML="合计：￥"+c; 
                
                }
            }
            else{var b=document.getElementsByClassName("1")
                for(var i=0;i<b.length;i++){
                    b[i].checked=false;
                    document.getElementById("zj").innerHTML="合计：￥0";
                }}
        },
        check(e){
            var a=document.getElementsByClassName("1");
            var sum=0;
            var b=0;
            document.getElementById("zj").innerHTML="合计：￥"+b
            for(var i=0;i<a.length;i++){             
                if(a[i].checked==true){
                    sum=sum+1;
                var sl=a[i].parentElement.nextElementSibling.nextElementSibling.children;
                var sl1=sl[4].innerHTML;
                var price=sl[5].innerHTML.split("￥")[1];
                b+=sl1*price;
                document.getElementById("zj").innerHTML="合计：￥"+b;
                    }
                else{sum=sum+0}
                }
            if(sum==a.length){
                document.getElementById("all").checked=true
            }
            else{ document.getElementById("all").checked=false}       
        },
        color1(e){
            var b=e.currentTarget.parentElement.children;
            for(var i=0;i<b.length;i++){
               b[i].className="";
           }
            e.target.className="back"
            },
        size(e){
           var b=e.currentTarget.parentElement.children;
           for(var i=0;i<b.length;i++){
               b[i].className=""
           }
            e.target.className="back"
        },
        jia(e){
            var a=e.currentTarget.nextElementSibling;
            if(a.innerHTML>1){
            var b=a.innerHTML-1;
            a.innerHTML=b}
            else{a.innerHTML=1}
            
        },
        jian(e){
             var a=e.currentTarget.previousElementSibling;
             var b=parseFloat(a.innerHTML)+1;
             if(b<this.store){a.innerHTML=b}
             else{ a.innerHTML=this.store}
             
        },
        jrgwc(){
            var a=document.getElementsByClassName("back")
            this.count=document.getElementsByClassName("jia")[0].nextElementSibling.innerHTML
            if(a.length<2){Toast("请选择颜色和尺码")}
            else { 
                var url="http://127.0.0.1:3000/spxq/addcart2?uid="+this.uid+"&img_url="+this.arr[0]+"&title="+this.title+"&color="+a[0].innerHTML+"&price="+this.price+"&store="+this.store+"&size="+a[1].innerHTML+"&pid="+this.pid[0]+"&count="+this.count;
                this.axios.get(url).then(result=>{
                    if(result.data.code==-1){   
                        Toast("请先登录")
                    }
                    else {
                        Toast("加入购物车成功");
                        this.isshow=false;
                        this.isshow1=true;
                        location.reload()
                    }
                })
            }
        },
        show(e){           
            this.uid=e.currentTarget.parentElement.parentElement.dataset.uid         
            var url="http://127.0.0.1:3000/spxq?uid="+this.uid        
            this.axios.get(url).then(result=>{
                this.list1=result.data[0];
                this.color=this.list1.color.split("/");
                this.title=this.list1.title;
                this.price=this.list1.price;
                this.price1=this.list1.price1;
                this.pid=this.list1.pid.split("&&")                
                var img=this.list1.img_url1;
                var size=this.list1.SIZE;
                this.sz=size.split(",");
                var a=img.split(",");
                this.arr=a[0].split("&&");
                this.store=this.list1.Store;
            })
            this.isshow2=true;
            this.isshow1=false;
        },
        hide(){
            this.isshow2=false;
            this.isshow1=true
        },
        gohome(){
            this.$router.push("/")
        },
        gospfl(){
            this.$router.push("/spfl")
        },
        del(e){
            var a=e.currentTarget.parentElement;
            var fid=a.dataset.id
             var url="http://127.0.0.1:3000/cart/del?fid="+fid;
             this.axios.get(url).then(result=>{
                 location.reload()
             })
        },
        login_gwc(){
            var url="http://127.0.0.1:3000/cart";
            this.axios.get(url).then(result=>{
                var rows=result.data.data;
                if(result.data.code==-1){
                    this.$router.push("/login")
                }
                else {
                    this.$router.push("/gwc")
                }
                })
        },
        loadmore(){
            var url="http://127.0.0.1:3000/cart";
            this.axios.get(url).then(result=>{  
                if(result.data.length>0){
                    this.isshow=true;
                    this.ishide=false;
                    this.list=result.data;
                    this.uid=result.data[0].uid; 
                }
            });
            
        },
    },
    created() {
        this.loadmore();
    },
}
</script>

<style scoped>
 .clearfix::after{clear: both;content: "";display: block;}
 .hed{height: 56px;}
 .header{ width: 100%;
    height: 56px;
    background: #fff;
    display: flex;
    position:fixed;
    padding-top: 3px;
    top:0px;
    z-index: 100;
    border-bottom: 1px solid #f1f1f1
  }
 .box1,.box2,.box3,.box4,.box5{display: flex;height: 100%;align-items: center;}
 .header img{width:48%;}
 .box1{margin-left:-1%}
 .box2 img{width:60%}
 .box2{margin-left: 1%}
 .box3 img{width:46%}
 .box4{margin-left: -10px}
 .box4 img{width: 56%}     
 .box5{margin-left: -6%}
 .box5 img{width:34%;margin-top: 2px}
 .fh{width: 94%;margin: auto;height: 37.5px;line-height: 46.5px;text-align: left}
 .fh img{width: 3%}
 .gwc-list img{width: 33%;margin-top: 28%}
 .gwc-list p{font-size: 16px;color: #000;margin-top: 20px}
 ul,li{list-style: none;}
 .dbnav li{line-height: 46px;text-align: center;float: left;border-right: 1px solid #ccc}
 .dbnav ul{position: fixed;bottom: 0;margin: 0;padding: 0;width: 100%;border: 1px solid #ccc}
 .dbnav ul li{font-size: 12px}
 .xg{background: url("../img/edit.3515bdd.png") no-repeat;width: 28px;height: 28px;position: absolute;bottom: 10px;right: 10px;}
 .del{background: url("../img/下载 (3).png") no-repeat;width: 14px; height: 14px;background-size: 14px 14px;margin-left: -5px;margin-top: 5px}
 .check{width: 8.5%;display: flex}
 .cartinfo{margin: 10px;    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    width: 55.5%;text-align: left
    }
    .cartinfo p{color:#000;font-size: 12px;margin: 0;margin-bottom: 3px}
    .cartinfo span {font-size: 12px;    display: contents}
.sizebox2{
         width: 100%;
         position: fixed;
         bottom: 0;}
    .price{ font-size: 13px;width: 40%;justify-content: space-around;display: flex;margin: auto}
    .close{background:url("http://127.0.0.1:3000/image/下载 (3).png") no-repeat center center;width: 14px;height: 14px;float: right;margin-right: 10px;margin-top: 10px}
    .color{width: 100%}
    .color ul{ width: 100%;padding:0 10px;margin: auto;display: flex;flex-wrap: wrap}
    .color ul li{width: 50%;font-size: 12px}
    .back{background: #000;color:#fff}
     .clearfix::after{clear: both;content: "";display: block;}
    .size{font-size: 12px;margin-top: 30px;border-bottom: 1px solid #ccc}
     .size ul{width: 100%;padding:0 10px;margin: auto;display: flex;flex-wrap: wrap;justify-content: space-around}
     .size ul li{margin-left: 5px;padding: 0 5px;line-height: 14px;margin-top: 5px}
     .jj{width: 50%;float: left;align-items: center;display: flex;height: 50px}
     .jj input{border: none;width: 50%}
     .jia{float: left}
     .jia button,.jian button{border-radius: 50%;width:18px;height:18px;padding: 0;background: #000;color:#fff;line-height: 17px}
     .kc{width: 40%;float: left;line-height: 50px;}
</style>