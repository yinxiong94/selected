<template>
    <div class="spfl">
        <div class="ss">
            <div class="ssk">
                <img src="../img/search.b518c46.png" alt="" style="position: absolute;top:10px;width:6%;margin-left:8px;margin-top:6px">
                <input type="text" placeholder="请输入商品名称或款号">
            </div>
            <div class="sswz">
                <a href="javascript:history.go(-1)">
                    <span>返回</span>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>               

        <div class="fl">
            <div class="flz">
                <ul  @click="add" id="a">
                    <li class="white">本周春季新品</li>
                    <li>指定款6折</li>
                    <li>官网专享款</li>
                    <li>男士</li>
                    <li>男士上装</li>
                    <li>男士裤装</li>
                    <li>男士外套</li>
                    <li>男士西装</li>
                    <li>男士配饰</li>
                    <li>女士</li>
                    <li>女士上装</li>
                    <li>女士裤装</li>
                    <li>女士裙装</li>
                    <li>女士外套</li>
                    <li>女士正装</li>
                    <li>女士配饰</li>
                </ul>
            </div>

            <div class="fly" >
                <ul>
                    <li>
                        <img src="../img/upload_4bc11c0b146fb0d16023e5290bca966c.jpg" alt="">
                        <span>本周春季新品</span>
                    </li>
                    <li>
                        <img src="../img/upload_860f0cbab87204b558a85770529398f3.jpg" alt="">
                        <span>3月22日春季新品</span>
                    </li>
                    <li>
                        <img src="../img/upload_e4c4d645af3ed8013d439e98dd24e709.jpg" alt="">
                        <span>3月19日春季新品</span>
                    </li>
                    <li>
                        <img src="../img/upload_84af75f6695d8d6fb222b8609271b0ee.jpg" alt="">
                        <span>3月15日春季新品</span>
                    </li>
                    <li>
                        <img src="../img/upload_44dde3ad59bb55a183e1712db6daf08c.jpg" alt="">
                        <span>3月12日春季新品</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        add(e){ 
            var a=e.target;          
            var b= e.currentTarget.getElementsByTagName("li");
            for(var i=0;i<b.length;i++){
               b[i].className=""
           }
            a.className="white"
        },
        gohome(){
            this.$router.push("/")
        }
    },
}
</script>

<style scoped>
    ul,li{list-style: none;padding: 0;margin: 0 }
    .clearfix::after{clear: both;content: "";display: block;}
    .ss{background: #f1f1f1}
    .ssk{width: 84%;margin-left: 3%;float: left;position: relative;}
    .ssk input{border-radius:20px;margin-top: 7px;border: none;height:36px;font-size: 13px;padding-left: 12%;margin-bottom: 8.5px}
    .sswz{float: right;margin-right: 3%;font-size: 13px;margin-top: 3.8%}
    .sswz a{text-decoration: none;color:#000}
    .flz{width:25%;font-size: 13px;height: 100%;overflow-x: scroll;}
    .flz::-webkit-scrollbar {display:none}
    .flz li{line-height:46px;overflow: hidden;text-overflow: ellipsis;padding: 0 10% ; white-space: nowrap;background: #f1f1f1}
    .fly{width: 75%;display: flex}
    .fly li{float: left;}
    .fl{display: flex;height: 613px}
    .fly li{width: 40%;margin-left: 6.5%;margin-top: 3.3%;padding-left: 8.3%}
    .fly li img{width: 99%}
    .fly li span{font-size: 13px;line-height: 45px;white-space: nowrap;overflow: hidden;width: 90%;margin-left: 5%;display: block;    text-overflow: ellipsis;margin-top: -5px}
    .white{background: #fff !important;border-right: 1px solid #f1f1f1}
    .kong{background: #f1f1f1 !important;}
</style>