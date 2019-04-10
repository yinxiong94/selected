<template>
    <div class="cart1">
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

         <div class="product">产品</div>

        <div class="sp_list">
            <ul>
                <li style="display:flex;margin-bottom:5px;border-bottom:1px solid #f0f0f0" v-for=" item of list">
                    <div class="img">
                        <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="">
                    </div>
                    <div style="width:74%;margin-left:3%">
                        <p style="margin:0">
                            <span>{{item.title}}</span>
                            <span>{{item.pid}}</span>
                        </p>
                        <p>{{item.color}}</p>
                        <p>{{item.size}}</p>
                        <span style="float:left">×{{item.count}}</span>
                        <span style="float:right">￥{{item.price1}}</span>
                    </div>
                </li>
            </ul>
        </div> 

        <div class="product" style="margin-top:20px;padding-top:10px;padding-bottom:10px">
            <span style="padding:5px;display:inline-block;">配送方式</span> 
            <div style="float:right;background:#fff;border-radius:15px">
            <span style="width:90px; display: inline-block;text-align: center;padding: 5px;border-radius: 15px;" class="fff" :data-index="1" @click="f" :class="active==1?'back':''">邮寄到家</span>
            <span style="width:90px; display: inline-block;text-align: center;padding: 5px;border-radius: 15px;"  class="fff" :data-index="2" @click="f" :class="active==2?'back':''">到店自提</span>          
            </div>
        </div>

        <div class="sizebox" @click="address">请选择地址</div>
        <div class="sizebox">输入券码</div>
        <div class="sizebox">优惠券</div>

        <div class="js">
            <p>
                <span>商品总额</span>
                <span id="zj">￥599</span>
            </p>
            <p>
                <span>运费</span>
                <span>+￥0</span>
            </p>
            <p>
                <span>折扣</span>
                <span id="zk">-￥90</span>
            </p>
            <p>
                <span style="color:#000">合计：</span>
                <span style="color:#000" id="zj1">￥0</span>
            </p>
        </div>

        <mt-button size='large' style="background:#000;color:#fff;border-radius:0;position:fixed;bottom:0">提交订单</mt-button>

    </div>
</template>


<script>
export default {
    data() {
        return {
            uid:this.$route.query.uid,
            list:[],
            price:[],
            count:[],
            active:1
        }
    },
    methods: {
        address(){
            console.log(0)
        },
        f(e){
            this.active=e.target.dataset.index
        },
        loadmore(){
            var url="http://127.0.0.1:3000/spxq/cart?uid="+this.uid;
            this.axios.get(url).then(result=>{
                this.list=result.data; 
                var sum=0;  
                var sum1=0;         
                for(var i=0;i<this.list.length;i++){                    
                    var a=(this.list[i].price1)*(this.list[i].count)
                    var b=(this.list[i].price)*(this.list[i].count)
                    sum+=a;
                    sum1+=b;

                }
            document.getElementById("zj").innerHTML="￥"+sum
            document.getElementById("zk").innerHTML="-￥"+(sum-sum1)
            document.getElementById("zj1").innerHTML="￥"+sum1
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
         gohome(){
            this.$router.push("/")
        },
        gospfl(){
            this.$router.push("/spfl")
        },
    },
    created() {
        this.loadmore()
    },
}
</script>

<style scoped>
    ul,li{ list-style: none;margin: 0;padding: 0}
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
 .product{ font-size: 12px;text-align: left;padding: 10px;background: #f3f3f3}
 .img{width: 18%}
 .img img{width: 100%}
 .sp_list ul li{padding: 3%}
 .sp_list p{text-align: left;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 12px; color:#000}
 .sp_list{text-align: left;font-size: 12px;}
 
 .sizebox{
     border-bottom: 1px solid #ccc;
     padding: 3.5%;
     text-align: left;
     font-size: 12px;
     line-height: 17px;
     background: url("../img/right.53f3bca.png") no-repeat 94% center;
     background-size:7px 12px
        }
    .js{text-align: left;padding: 3%;background:#f3f3f3;margin-bottom:100px }
    .js p span:nth-child(2){float: right;}
    .fff{background:#fff}
    .back{ background:#000;color:#fff;z-index:10}
</style>