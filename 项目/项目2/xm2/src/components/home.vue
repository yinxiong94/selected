<template>
    <div class="home" id="top">
        <div class="hed">
            <div class="header">
            <div class="box1" @click="gospfl">
                <router-link to="">
                    <img src="../img/1.png" alt="">
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

        <div class="a">
            <mt-swipe :auto="4000" class="mint-swipe" >
                <mt-swipe-item>
                    <router-link to="">
                        <img src="../img/upload_1d9dd745a73b941dce204ff48b716716.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
                <mt-swipe-item>
                    <router-link to="">
                        <img src="../img/upload_745b9ae87c43d7414a690d607742af9c.jpg" alt="">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="gg">
            <router-link to="">
                <img src="../img/upload_bd7bdd69ddff03136641f565b5e68049.jpg" alt="">
            </router-link>
        </div>

        <p class="text1">2月26日初春新品</p>

        <div class="prefec">
            <router-link to="">
                <img src="../img/upload_a0f90571868238afb0a736165e355933.jpg" alt="">
            </router-link>
            <router-link to="">
                <img src="../img/upload_98f0cafeb6fee0854a0ac641db10cd06.jpg" alt="">
            </router-link>
        </div>

        <div class="newproduct">
            <router-link to="/spxq">
                <img src="../img/upload_2590dea1b826d382e1a75c7370482687.jpg" alt="">
            </router-link>
            <router-link to="spxq">
                <img src="../img/upload_3ac8212c21636513c7664892af17bd00.jpg" alt="">
            </router-link>
        </div>

        <div class="video">
            <a href="" class="newa">2019初春新品</a>
            <video src="../img/video.mp4" controls poster="../img/upload_4c2f7c65892ba62d25d200d0b6bc3735.jpg"></video>
        </div>

        <h3 style="font-size:20px">— 热销推荐 —</h3>

        <div class="hot">
            <ul class="hotul">
                <li>
                    <a href="">
                        <img src="../img/419201506E39_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">修身水洗商务休闲长裤</h4>
                    <h4> ￥249.5</h4>
                </li>
                <li>
                    <a href="">
                        <img src="../img/4191OM530S22_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">拼色运动男士棒球夹克外套</h4>
                    <h4> ￥699</h4>
                </li>
                <li>
                    <a href="">
                        <img src="../img/4191OM515E39_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">春季条纹罗纹休闲男士棒球外套</h4>
                    <h4> ￥418.8</h4>
                </li>
                <li>
                    <a href="">
                        <img src="../img/4191OM519E39_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">春季新男织带拼接棒球领休闲夹克外套 </h4>
                    <h4> ￥478.8</h4>
                </li>
            </ul>
        </div>

        <div class="gg1">
            <a href="">
                <img src="../img/upload_f2931579b568940ef491381d0b671af2.jpg" alt="">
            </a>
        </div>

         <div class="fl1">
            <div style="width:52%;float:left">
                <img src="../img/upload_8fc51a9626f4a7a6e48f00422054ccdb.jpg" alt="">
            </div>
            <div style="width:48%;float:left">
                <img src="../img/upload_357dec356f370ba8f05cb605ad996a70.jpg" alt="">
                <img src="../img/upload_618bd1f864d7e181362304a868af34e3.jpg" alt="">
            </div>
            <div style="width:52%;float:left">
                <img src="../img/upload_68c6aa62eeabed894227b957dcbfac5b.jpg" alt="">
            </div>
            <div style="width:48%;float:left;padding-top:5px">
                <img src="../img/upload_bfdd7c87491a23cbee498c845aae513a.jpg" alt="">
            </div>
            <div style="width:94%;margin-left:3%;justify-content: space-between;display: flex;">
                <div style="width:36.6%;float:left">
                    <img src="../img/upload_9af525d09c7875272ca2618ed7f219be.jpg" alt="">
                </div>
                <div style="width:30%;float:left">
                    <img src="../img/upload_dcedbc51c0df3df0a9a4d2f02d65ee37.jpg" alt="">
                    <img src="../img/upload_feb8174d70a2994f488775e7728dc890.jpg" alt="">
                </div>
                <div style="width:30%;float:left">
                    <img src="../img/upload_ec91e64324c8fce3103566863a636fa9.jpg" alt="">
                    <img src="../img/upload_38de94692ceb3e3880f8ea3142d5cac7.jpg" alt="">
                </div>
            </div>
            <div>
                <img src="../img/upload_84548e06663d5025ea349792d9c46912.jpg" alt="">
            </div>
        </div>

        <div class="xp">
            <a href="">
                <img src="../img/upload_6dae17489c1c06f84389a7b199a55c42.jpg" alt="">
            </a>
            <a href="">
                <img src="../img/upload_cf7492b58f295b28c8f5103b6059127d.jpg" alt="">
            </a>
            <a href="">
                <img src="../img/upload_88ecce5d9a29ea59fa0980ca14c34778.jpg" alt="">
            </a>
            <a href="">
                <img src="../img/upload_080d390452fe1a6917e796174d6eec11.jpg" alt="">
            </a>
            <a href="">
                <img src="../img/upload_8ddd47baab354ca05e6f6ea8020f5b26.jpg" alt="">
            </a>
            <a href="">
                <img src="../img/upload_5e813aa4688bcda92f8db89530cb7170.jpg" alt="">
            </a>
            <a href="">
                <img src="../img/upload_e8dafa7214464ce2ff33a95a25bb85ce.jpg" alt="">
            </a>
            <a href="">
                <img src="../img/upload_497f26fe766566a42e486f2a3cc0f975.jpg" alt="">
            </a>
        </div>

        <div class="xp2">
            <div>
                <img src="../img/upload_35a2ca8d89dc27e56d5c7aa1db3d15d8.jpg" alt="">
            </div>
            <a href="">
                <img src="../img/upload_1847c3b14c714393bf8ef15185682ba0.jpg" alt="">
            </a>
        </div>

        <h3 style="font-size:20px">— 猜你喜欢 —</h3>

        <div>
            <ul class="hot1ul">
                <li>
                    <a href="">
                        <img src="../img/41915X503E39_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">暗格纹戗驳领修身商务系列西装 </h4>
                    <h4>￥999</h4>
                </li>
                <li>
                    <a href="">
                        <img src="../img/41915X504E40_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">男装新品修身商务正装西服</h4>
                    <h4>￥999</h4>
                </li>
                <li>
                    <a href="">
                        <img src="../img/41916A503E40_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">男装商务款格纹修身西裤 </h4>
                    <h4>￥499</h4>
                </li>
                <li>
                    <a href="">
                        <img src="../img/4191OM519E39_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">春季新男织带拼接棒球领休闲夹克外套 </h4>
                    <h4>￥478.8</h4>
                </li>
                <li>
                    <a href="">
                        <img src="../img/41916A505E39_p3.jpg" alt="">
                    </a>
                    <h4 style="height:24px;padding:5px 10px 5px 0;">男士纯色合体商务西裤长裤 </h4>
                    <h4>￥499</h4>
                </li>
            </ul>
        </div>

        <div class="ls">
            <a href="">
                <img src="../img/upload_ae3fb4fa6fb9ac83149a2eb097fba67d.jpg" alt="">
            </a>
        </div>

        <div class="foot">
            <p>
                2013 Bestseller.All Right Reserved
            </p>
            <p>                
                津ICP备12007886号 -10
            </p>
            <p>(营业执照)&nbsp|&nbsp用户服务协议</p>
        </div>

        <div class="dw" @click="top">Λ</div>

    </div>
</template>

<script>
export default { 
    data() {
        return {
            
        }
    },
    methods: {
        top(){
            document.getElementById("app").scrollIntoView();
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
        gohome(){
            this.$router.push("/")
        },
        gospfl(){
            this.$router.push("/spfl")
        }
    },
}
</script>

<style scoped>

.hed{height: 56px;}
 .header{ width: 100%;
    height: 56px;
    background: #fff;
    display: flex;
    position:fixed;
    padding-top: 4px;
    top:0px;
    z-index: 100;
    
  }
 .box1,.box2,.box3,.box4{display: flex;height: 100%;align-items: center}
 .header img{width:48%;}
 .box1{margin-left:-0.5%}
 .box2{margin-left: 3%}
 .box2 img{width:60%}
 .box3{margin-left: 20px}
 .box3 img{width:46%}
 .box4{margin-left: -10px}
 .box4 img{width: 56%}   
 ul,li{list-style: none;}
 .a{height:240px}
 .a img{width: 100%}
 .gg img{width: 100%}
 .text1{margin-top: 15px;
    font-size: 16px;
    line-height: 36px;
    text-align: center;
    font-weight: 700;
    color: #000;}
 .prefec img{width: 48%}
 .newproduct img{width: 48%}
 .video{position: relative;}
 .video video{width: 100%}
 .newa{    position: absolute;
    top: 10px;
    right: 10px;
    padding: 2px 10px;
    font-size: 12px;
    color: white;
    border-radius: 6px;
    background: #737373}
    .hot{overflow-y: scroll;width: 94%;margin-left: 3%;}
    .hot::-webkit-scrollbar {display:none}
    .hot li{width: 30%;margin-right: 2%}
    .hot li img{width: 100%}
    .hotul{float: left;padding: 0;display: -webkit-box;margin: 0}
    .hotul h4{font-size: 14px;font-weight: 500;line-height: 18px;overflow: hidden;margin: 0;text-align: left}
    .hot1ul h4{font-size: 14px;font-weight: 500;line-height: 18px;overflow: hidden;margin: 0;text-align: left}
    .gg1 img{width: 100%}
    .fl1{float: left;}
    .fl1 img{width:100%}
    .xp img{width: 100%;}
    .xp2 img{width: 100%}
    .hot1ul li{width: 45.5%;margin-left: 3%;float: left;}
    .hot1ul img{width: 100%}
    .hot1ul{float: left;padding: 0}
    .ls img{width: 96%}
    .foot p{ color: #000;margin: 0;font-size: 12px;line-height: 16px}
    .foot{margin-top: 10px;margin-bottom: 5px}
    .dw{    width: 25px;
    height: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    position: fixed;
    bottom: 15%;
    right: 3px;
    line-height: 25px;
    color:#fff;
    font-size: 18px}
</style>
