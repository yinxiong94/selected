$(function(){
    var phone=document.cookie;
    $.ajax({
        url:"http://127.0.0.1:3000/cart",
        type:"get",
        data:{phone},
        dataType:"json"
    })
    .then(function(result){
        console.log(result)
        var html="";
        var html1="";
        var html2="";
        for( var i=0;i<result.length;i++){
            var color=result[i].color;
            color=color.split("/");
            var size=result[i].size;
            size=size.split(",");
            for(var j=0;j<color.length;j++){
                html1+=`<option value="">${color[j]}</option>`;
            }
            for(var k=0;k<size.length;k++){
                html2+=`<option value="">${size[k]}</option>`
            }
        html+=`<ul style="position: relative">
        <li style="padding-top: 10px;text-align: center;padding-bottom: 10px;width:18.2%;">
            <input type="checkbox"><img src="${result[i].img_url }" style="width: 100px;height: 150px;vertical-align:middle">
        </li>
        <li style="font-size: 14px;width: 16.1%;text-align: center;margin-top: 35px">${result[i].title}</li>
        <li style="width: 16.1%;text-align: center;margin-top: 35px;">
            <select name="" id="" style="width:63.73%;line-height: 1.15;
            height: 23px;
            font-size: 14px;">          
            ${html1}
            </select>
        </li>
        <li style="width: 16.1%;text-align: center;margin-top: 35px;">
                <select name="" id="" style="width:63.73%;line-height: 1.15;
                height: 23px;
                font-size: 14px;">
                        ${html2}
                    </select>
        </li>
        <li style="width: 14.14%;text-align: center;font-size: 14px;margin-top: 36px">
            <div style="width: 56px">
                <input type="text" value="${result[i].count}" style="width: 24px;height: 22px;border: 1px solid #999">
                <div style="float: right;height: 24px;width: 24px;margin-top: -4px">
                        <button style="width:24px;height: 11px;border: 0;background: black;color:white;line-height: 11px" id="btn1" data-id="${result[i].fid}">∧</button>
                        <button style="width:24px;height: 11px;border: 0;background: black;color:white;line-height: 11px" id="btn2" data-idx="${result[i].fid}">∨</button>
                </div>
            </div>
        </li>
        <li style="width: 10.08%;text-align: center;font-size: 14px;margin-top: 35px;">￥${result[i].price}</li>
        <li style="width:10.16%;text-align: center;font-size: 14px;margin-top: 35px;" id="zj">￥${result[i].price}</li>
        <button style="position: absolute;right:10%;bottom:10%;width:125px;height: 30px;background: white;border: 1px solid #999;color:#999;font-size: 14px" data-id="${result[i].fid}" id="btn3">从购物车中删除</button>
    </ul>`;
    html1="";
    html2="";}
    var div=document.querySelector(".gwxq")
    div.innerHTML=html;
    $(".gwxq").on("click","#btn1",function(){
        var n=$(this).parent().prev().val();
        n++;
        $(this).parent().prev().attr("value",n);
       var $a=$(this).parent().parent().parent().next().html().replace("￥","");
       var $zj=$a*n;
       $(this).parent().parent().parent().next().next().html(`￥${$zj}`) 
       var a=0;
       for(var i=0;i<$(".gwxq input:checked").length;i++){
           var je=$(".gwxq input:checked")[i];
            a=a+parseInt($(je).parent().parent().find("li:last").html().replace("￥",""))           
       }
       $("#zje").html(`商品总金额：￥${a}`)
       $("#yf").html(`应付金额：￥${a}`) 
    })

    $(".gwxq").on("click","#btn2",function(){
        var n=$(this).parent().prev().val();
        var b=n-1;
        if(b>0){
        $(this).parent().prev().attr("value",b);}
        else {b=1}
        var $a=$(this).parent().parent().parent().next().html().replace("￥","");
        var $zj=$a*b;
       $(this).parent().parent().parent().next().next().html(`￥${$zj}`)
       var a=0;
       for(var i=0;i<$(".gwxq input:checked").length;i++){
           var je=$(".gwxq input:checked")[i];
            a=a+parseInt($(je).parent().parent().find("li:last").html().replace("￥",""))           
       }
       $("#zje").html(`商品总金额：￥${a}`) 
       $("#yf").html(`应付金额：￥${a}`) 
    })

    $("#all").click(function(){
        var $check=$(this).prop("checked");
        if($check==true){$(".gwxq input").prop("checked",true);$("#all1").prop("checked",true)}
        else {$(".gwxq input").prop("checked",false);$("#all1").prop("checked",false)}
   })

   $("#all1").click(function(){
       var $check=$(this).prop("checked");
       if($check==true){$(".gwxq input").prop("checked",true);$("#all").prop("checked",true)}
       else {$(".gwxq input").prop("checked",false);$("#all").prop("checked",false)}
    })

    $("input[type=checkbox]").click(
        function(){
            var a=0;
       for(var i=0;i<$(".gwxq input:checked").length;i++){
           var je=$(".gwxq input:checked")[i];
            a=a+parseInt($(je).parent().parent().find("li:last").html().replace("￥",""))           
       }
       $("#zje").html(`商品总金额：￥${a}`) 
       $("#yf").html(`应付金额：￥${a}`) 
        }
    )
    
        $(".gwxq").on("click","input",function(){
           var a=$(".gwxq input[type=checkbox]").length-$(".gwxq input:checked").length;
           if(a>0){$("#all").prop("checked",false);$("#all1").prop("checked",false)}
           else{$("#all").prop("checked",true);$("#all1").prop("checked",true)}
        })

        $(".gwxq").on("click","#btn3",function(e){
            var fid=e.target.dataset.id;
           $.ajax({
               url:"http://127.0.0.1:3000/cart/del",
               type:"get",
               data:{fid},
               dataType:"json"
           }).then(function(result){
               confirm(`确认删除${fid}号商品么`);
               location.reload()
           })     
        })
     
   })


})