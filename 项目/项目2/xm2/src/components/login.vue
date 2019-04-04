<template>
    <div class="login">
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
                    <div class="box3">
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

        <div class="loginput">
            <div class="uname">
                <span>手机号码:</span>
                <input type="text" name="uname" style="width:50%" v-model="uname">
            </div>
            <div class="upwd">
                <span>登录密码:</span>
                <input type="password" name="upwd" style="width:50%" v-model="upwd">
            </div>
            <p style="margin-top:10px">没有注册？点击注册</p>    
            <div class="dl">
                <mt-button size="large" style="background:#000;color:#fff" @click="login">登陆</mt-button>
            </div>
        </div>

        <div class="db">
            <p>2013 Bestseller.All Right Reserved</p>
            <p>津ICP备12007886号 -4</p>
        </div>

    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
    data() {
        return {
            uname:"",
            upwd:"" 
        }
    },
    methods: {
       login(){
           var u=this.uname;
           var p=this.upwd;
           var reg=/^[0-9]{6,11}$/i;
           if(!reg.test(u)){
               Toast("用户名格式不正确，请检查");
               return;
           }
           if(!reg.test(p)){
               Toast("密码格式不正确，请检查");
               return;
           }
           var url="http://127.0.0.1:3000/login";
            var postData=this.qs.stringify({
                phone:u,
                upwd:p
            })
           this.axios.post(url,postData).then(result=>{
               if(result.data.code==1){
                   Toast("登录成功");                   
                   setTimeout(()=>{this.$router.push("/")},1000)  ;
               }
               else {
                   Toast("用户名或密码错误")                         
               }
           })
        },
        gohome(){
            this.$router.push("/")
        },
        gospfl(){
            this.$router.push("/spfl")
        }
       } 
}
</script>

<style scoped>
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
 .loginput{width:76%;margin: auto;font-size: 14px;text-align: left;margin-top:19% }
 .loginput span{display: inline-block}
 .uname,.upwd{width: 100%;border-bottom: 1px solid black}
 .uname input,.upwd input{margin: 0;border: 0;margin-bottom: 1px;padding-left: 5px}
 .upwd{margin-top:6% }
 .dl{margin-top: 25%}
 .db{width:53.5%;margin: auto;margin-top: 20%}
 .db p{font-size: 12px;color:#000}
</style>