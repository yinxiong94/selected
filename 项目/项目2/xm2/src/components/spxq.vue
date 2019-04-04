<template>
    <div class="spfl">
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

        <div class="sx">
            <div class="tb">
                <img src="../img/下载.png" alt="" style="margin-right:50%;margin-top:10px">
                <img src="../img/下载 (1).png" alt="">
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="px">
            <div>人气</div>  
            <img src="../img/29.f6805b9.png" alt="">
            <div>新品</div>
            <img src="../img/29.f6805b9.png" alt="">
            <div>价格</div>
            <img src="../img/30.8fdec4a.png" alt="" style="height:10.5px">
            <div>销量</div>
            <img src="../img/29.f6805b9.png" alt="">
        </div>

        <div class="xq" id="xq">
            <div class="xq1"  v-for="item of list">
                <router-link :to="'/spxq1?uid='+item.uid">
                <img :src="'http://127.0.0.1:3000/'+item.img_url" alt="">
                </router-link>
                <p>{{item.title}}</p>
                <div style="margin-left:0;float:left">
                    <span>￥{{item.price}}</span>
                    <span style="text-decoration: line-through;color:#929090">￥{{item.price1}}</span>
                </div>
                <mt-button size="small" style="background:#fff;color:#000;border:1px solid black">加入购物车</mt-button>
            </div>
            <!-- <div class="xq1">
                <img src="../img/4191OM528S01_p3.jpg" alt="">
                <p>连帽刺绣休闲男士夹克外套</p>
                <div style="margin-left:0;float:left">
                    <span>￥449.5</span>
                    <span style="text-decoration: line-through;color:#929090">￥899</span>
                </div>
                <mt-button size="small" style="background:#fff;color:#000;border:1px solid black">加入购物车</mt-button>
            </div>
            <div class="xq1">
                <img src="../img/4191OM528S01_p3.jpg" alt="">
                <p>连帽刺绣休闲男士夹克外套</p>
                <div style="margin-left:0;float:left">
                    <span>￥449.5</span>
                    <span style="text-decoration: line-through;color:#929090">￥899</span>
                </div>
                <mt-button size="small" style="background:#fff;color:#000;border:1px solid black">加入购物车</mt-button>
            </div> -->
        </div>

        <div class="dw" @click="top">Λ</div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        top(){
            document.getElementById("app").scrollIntoView();
        },
        loadMore(){
            var xq=document.getElementById("xq");
            var url="http://127.0.0.1:3000/sp";
            this.axios.get(url).then(result=>{
                this.list=result.data;
                console.log(this.list)
            })

        },
        gohome(){
            this.$router.push("/")
        },
        gospfl(){
            this.$router.push("/spfl")
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
        this.loadMore();
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
 .sx{border-bottom: 1px solid #bebebe;width: 94%;margin: auto}
 .tb{width: 20%;float: right;height: 37.5px;line-height: 37.5px}
 .clearfix::after{clear: both;content: "";display: block;}
 .tb img{width: 24%}
 .px{display: flex;font-size: 12px;justify-content: space-around;line-height: 33px;width: 93%;margin-left: 7%}
 .px img{width: 4.5px;height: 4.5px;margin: auto}
 .xq{display: flex;width: 92%;margin-left: 4%;flex-wrap: wrap;margin-top: 1%}
 .xq1{width: 49%;}
 .xq1 p{color:#000;font-size: 12px;text-align: left;margin: 0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap}
 .xq1 span{font-size: 13px}
 .xq1 img{width: 100%;height: 73%}
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
    .xq1:nth-child(2n-1){margin-right: 2%}
</style>