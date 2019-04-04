$(function(){
    if(location.search!==""){
        var uid=location.search.split("=")[1];
        $.ajax({
            url:"http://127.0.0.1:3000/spxq",
            type:"get",
            data:{uid},
            dataType:"json",
            success:function(result){
                console.log(result)
                var rows=result[0];
                console.log(rows)
                var img=rows.img_url1;
                var size=rows.SIZE;
                var sz=size.split(",");
                var arr=img.split(",");
                var d=0;
                var g=arr[d].split("&&");                      
                var html=`
                <div class="xt"><img src="${g[0]}" alt=""/></div>
                <div><img src="${g[1]}" alt=""/></div>
                <div><img src="${g[2]}" alt=""/></div>
                <div><img src="${g[3]}" alt=""/></div>
            </div>`
            var div=document.querySelector(".xqbox1")
            div.innerHTML=html;
            html2=`<img src="${g[0]}" alt=""/>`
            var div1=document.querySelector("#sb")
            div1.innerHTML=html2;
            var div2=document.querySelector(".xqjs")
            var html3=` <span>${rows.title}</span>
            <p style="margin-bottom: 12px">产品信息：面料：棉100%<br/>
                产品编号：${rows.pid}</p>
            <div style='background:url("image/promotionsD.jpg");padding:16px 20px;margin-bottom: 18px'>
                <p style="padding-left: 0">
                    <span style="text-align:left;font-size: 14px;color: #999;padding: 0">价格</span>
                    <span style="text-align:left;font-size: 14px;color:#d91e25;padding-left: 45px;font-weight: bold">￥</span>
                    <span style="text-align:left;font-size: 24px;color:#d91e25;padding: 0;font-weight: bold">${rows.price}</span>
                </p>
                <p style="padding-left: 0">
                    <span style="text-align:left;font-size: 14px;color: #999;padding: 0">本店活动</span>
                    <span style="text-align:left;font-size: 12px;color:#000;padding-left: 20px">满一件，包邮</span>
                </p>
            </div>
            <div>
                <p style="width: 96px;float: left">尺码</p>
                <div style="float: left;width: 384px"><ul>`
                var html4="";
                for(i=0;i<sz.length;i++){
                var p=sz[i];
                console.log(p)
                html4+=`<li>${p}</li>`}
            var html5=`</ul></div>
            <div>
                <p style="width: 96px;float: left;line-height: 90px">颜色</p>
                <div>`
                var html6="";
                for(var i=0;i<arr.length;i++){
                 html6+=`<div class="xqjsimg">
                        <img style="width: 52px;height:83px" src="${arr[i].split("&&")[0]}" alt=""/>
                    </div>`}
                    var html7=`</div>
                    </div>
            <div class="clearfix"></div>
            <div class="kc">
                <p style="width: 96px;float: left;line-height: 44px">数量</p>
                <input type="text" value="1"/>
                <div style="width:16px;float: left">
                    <button id="sj" style="width: 16px;height: 22px;border: 1px solid #999" >+</button>
                    <button id="sja" style="width: 16px;height: 22px;border: 1px solid #999">-</button>
                </div>
                <div>
                <span style="padding: 0;height: 44px;line-height: 44px;
                color: #999;font-size: 14px;font-weight: bold;padding-left: 5px">库存：</span>
                <span style="padding: 0;height: 44px;line-height: 44px;
                color: red;font-size: 14px;font-weight: bold">8</span>
                <span style="padding: 0;height: 44px;line-height: 44px;
                color: #999;font-size: 14px;font-weight: bold">件</span>
                </div></div>
                <div class="gwc">
                    <div class="gwc1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加入购物车</div>
                    <div class="gwc2"><a href="cart.html">立即购买</a></div>
                </div>
                <div class="clearfix"></div>
            </div>`
                div2.innerHTML=html3+html4+html5+html6+html7

               $(".gwc1").click(function(){
                   var phone=document.cookie;
                   if(!phone){location.href="login.html"}
                   else{
                   var img_url=arr[0].split("&&")[0];
                   var title=rows.title;
                   var color=rows.color;
                   var price=rows.price;
                   var store=rows.Store;
                   var uid=rows.uid;
                   $.ajax({
                       url:"http://127.0.0.1:3000/spxq/addcart",
                       type:"get",
                       data:{phone,img_url,title,color,price,store,uid,size},
                       dataType:"json"
                   }).then(function(result){
                       if(result!=""){alert("添加购物车成功");
                       location.reload()
                    }})
                }})
               
                $(".xqjs li").click(
                    function(){
                        $(this).siblings().removeClass("li")
                        $(this).addClass("li");
                        
                    }
                )
                
                $(".xqjsimg").click(
                    function(){
                        $(this).siblings().removeClass("xqjsimg-1")
                        $(this).addClass("xqjsimg-1")
                        d=$(this).index()
                         html=`
                <div class="xt"><img src="${arr[d].split("&&")[0]}" alt=""/></div>
                <div><img src="${arr[d].split("&&")[1]}" alt=""/></div>
                <div><img src="${arr[d].split("&&")[2]}" alt=""/></div>
                <div><img src="${arr[d].split("&&")[3]}" alt=""/></div>
                </div>`;
                div.innerHTML=html;
                html2=`<img src="${arr[d].split("&&")[0]}" alt=""/>`;
                div1.innerHTML=html2; 
                $(".sp").css("background",`url(${arr[d].split("&&")[0]})`)
                    }
                )
                
                $("#sj").click(
                    function(){
                        var a=$(this).parent().prev().attr("value")
                        var b=parseFloat(a)+1;
                        $(this).parent().prev().attr("value",`${b}`)
                    }
                )
                
                $("#sja").click(
                    function(){
                        var a=$(this).parent().prev().attr("value")
                        var b=a-1;
                        if(b>0){
                        $(this).parent().prev().attr("value",`${b}`)}
                    }
                )

            $(function(){
                $(".sp").css("background",`url(${g[0]})`)
            })

            $(".xqbox1").on("click","img",
                function(){
                    var $fa=$(this).parent()
                    var $href=$(this).attr("src")
                    $fa.parent().next().children(".sp").css("background",`url(${$href})`)
                    $fa.parent().next().children("span:last").children().attr("src",`${$href}`);
                    $fa.siblings().removeClass("xt");
                    $fa.addClass("xt")
                }
            )
            }
        })
    }
})