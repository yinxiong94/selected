$(function(){
    var a=location.search.split("=")[1];
    a=decodeURIComponent(a);
    $.ajax({
        url:"http://127.0.0.1:3000/sp/sss",
        data:{a},
        type:"get",
        dataType:"json"
    }).then(function(result){
        console.log(result)
        var html=``;
    for(i=0;i<result.length;i++){
        var p=result[i];
        html+=`<div class="spfl-2-1" style="margin-left:50px">
        <a href="${p.href}" class="spfl-2-1-a">
            <img src="${p.img_url}" alt=""/>
            <img src="${p.img_url1}" class="spfl-2-1-img" alt=""/>
            <h2 class="spfl-2-1-h">快速购买</h2>
        </a>
        <a href="javascript:" class="spfl-2-1-h1">${p.title}</a>
        <p style="margin-top: 5px">
            <span class="zhj">￥${p.price}</span>
            <span class="yj">￥${p.price1}.00</span>
            <span class="ykj">一口价</span>
        </p>
    </div>
    `;
    var div=document.querySelector(".spfl-2")
    div.innerHTML=html;
    $(".spfl-2-1-img").hide()
    $(".spfl-2-1-h").hide()
    $(".spfl-2-1-a").mouseenter(
    function(){
        $(this).children(".spfl-2-1-img,.spfl-2-1-h").show()
    })
    $(".spfl-2-1-a").mouseleave(
    function(){
        $(this).children(".spfl-2-1-img,.spfl-2-1-h").hide()
    }
        )
    }})
})