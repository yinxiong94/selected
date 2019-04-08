<template>
    <div class="spxq-list">
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

        <div class="a">
            <mt-swipe :auto="4000" class="mint-swipe" >
                <mt-swipe-item v-for="item of arr">
                    <router-link to="">
                        <img :src="'http://127.0.0.1:3000/'+item" alt="">
                    </router-link>
                </mt-swipe-item>
                <!-- <mt-swipe-item>
                    <router-link to="">
                        <img src="../img/4191OM528S01_T02.jpg" alt="">
                    </router-link>
                </mt-swipe-item> -->
            </mt-swipe>
        </div>

        <div style="font-size:14px">{{title}}</div>
        <div style="font-size:14px">
            <span style="color:red;margin-right:10px">￥{{price}}</span>
            <span style="text-decoration: line-through;color:#a9a7a7">￥{{price1}}</span>
        </div>
        <div style="font-size:12px;color:#949494">商品款号:{{pid[0]}}</div>

        <div class="sizebox" @click="show1">
            请选择 颜色分类 尺码
        </div>

        <div class="sizebox1" v-if="isshow">
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
            <mt-button size="large" style="background:#000;border-radius:0;color:#fff " @click="jrgwc">加入购物车</mt-button>
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
            <mt-button size="large" style="background:#000;border-radius:0;color:#fff " @click="nowshop">立即购买</mt-button>
        </div>

        <div class="ditu">
            查看附近在售门店
        </div>
        

        <div class="dbnav" v-if="isshow1">
            <ul>
                <li style="border-top:1px solid #000;border-bottom:1px solid #000;padding-top:3%;padding-bottom:3%;background:#fff">导购专享</li>
                <li style="padding-top:3%;padding-bottom:3%;background:#d4d4d4" @click="show">购物车</li>
                <li style="padding-top:3%;padding-bottom:3%;background:#000;color:#fff" @click="show1">立即购买</li>
            </ul>
        </div> 

    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
    data() {
        return {
          isshow:false ,
          isshow1:true,
          isshow2:false,
          uid:this.$route.query.uid,
          list:[],
          sz:[],
          arr:[],
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
        nowshop(){
            this.count=document.getElementsByClassName("jia")[0].nextElementSibling.innerHTML
            var a=document.getElementsByClassName("back")
                this.$router.push("/cart?img_url="+this.arr[0]+"&title="+this.title+"&pid="+this.pid+"&size="+a[1].innerHTML+"&count="+this.count+"&price="+this.price+"&color="+a[0].innerHTML)
        },
        gohome(){
            this.$router.push("/")
        },
        gospfl(){
            this.$router.push("/spfl")
        },
       show(){
            this.isshow=true;
            this.isshow1=false
        },
        show1(){
            this.isshow2=true;
            this.isshow1=false
        },
        
        hide(){
            this.isshow=false;
            this.isshow1=true;
            this.isshow2=false
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
        loadmore(){ 
            var url="http://127.0.0.1:3000/spxq?uid="+this.uid            
            this.axios.get(url).then(result=>{
                this.list=result.data[0];
                console.log(this.list)
                this.color=this.list.color.split("/");
                this.title=this.list.title;
                this.price=this.list.price;
                this.price1=this.list.price1;
                this.pid=this.list.pid.split("&&")                
                var img=this.list.img_url1;
                var size=this.list.SIZE;
                this.sz=size.split(",");
                var a=img.split(",");
                this.arr=a[0].split("&&");
                this.store=this.list.Store;
            })
        },
        jrgwc(){
            var a=document.getElementsByClassName("back")
           this.count=document.getElementsByClassName("jia")[0].nextElementSibling.innerHTML
            if(a.length<2){Toast("请选择颜色和尺码")}
            else { 
                var url="http://127.0.0.1:3000/spxq/addcart1?uid="+this.uid+"&img_url="+this.arr[0]+"&title="+this.title+"&color="+a[0].innerHTML+"&price="+this.price+"&store="+this.store+"&size="+a[1].innerHTML+"&pid="+this.pid[0]+"&count="+this.count;
                this.axios.get(url).then(result=>{
                    if(result.data.code==-1){   
                        Toast("请先登录")
                    }
                    else {
                        Toast("加入购物车成功");
                        this.isshow=false;
                        this.isshow1=true
                    }
                })
            }
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
    },
    created() {
        this.loadmore()
    },
}
</script>

<style scoped>
ul,li{ list-style: none}
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
 .box1,.box2,.box3,.box4,.box5{display: flex;height: 100%;align-items: center}
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
 .a{height:375px}
 .a img{width: 100%} 
 .sizebox{
     border-top:1px solid #ccc;
     border-bottom: 1px solid #ccc;
     padding: 3.5%;
     text-align: left;
     font-size: 12px;
     line-height: 17px;
     margin-top: 4%;
     background: url("../img/right.53f3bca.png") no-repeat 94% center;
     background-size:7px 12px
        }
    .ditu{
     border-bottom: 1px solid #ccc;
     padding: 3.5%;
     text-align: left;
     font-size: 12px;
     line-height: 17px;
     background: url("../img/right.53f3bca.png") no-repeat 94% center;
     background-size:7px 12px} 
     .sizebox1{
         width: 100%;
         position: fixed;
         bottom: 0;}
    .sizebox2{
         width: 100%;
         position: fixed;
         bottom: 0;}
    .price{ font-size: 13px;width: 40%;justify-content: space-around;display: flex;margin: auto}
    .close{background:url("../img/下载 (3).png") no-repeat center center;width: 14px;height: 14px;float: right;margin-right: 10px;margin-top: 10px}
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
     .dbnav ul{position: fixed;bottom: 0;margin: 0;padding: 0;width: 100%;display: flex}
     .dbnav ul li {width: 33.3%;font-size: 12px;line-height: 22px;text-align: center}
     .dbnav{width: 100%;}
</style>