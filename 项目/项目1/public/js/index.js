(function(){ 

    $("#sss #span").click(function(){
        console.log(1)
        var a=$(".ss input").val();       
        location.href=`sp1.html?a=${a}`;
    })

    $("#ssss #span").click(function(){
        var a=$("#ssss  input").val();       
        location.href=`sp1.html?a=${a}`;
    })


    $("#1234").hide()
    if(document.cookie!=""){
        $("#123").hide()
        $("#1234").show()}


        var phone=document.cookie;
        if(phone!=""){
        $.ajax({           
            url:"http://127.0.0.1:3000/sp/gwc",
            data:{phone},
            type:"get",
            dateType:"json"
        }).then(function(result){
            var html=`<a href="cart.html"><img style="vertical-align:bottom" src="image/buy_cart.png" alt=""><label for="auto" >购物袋(${result.length})</label></a>`
            var div=document.querySelector("#gwc")
            div.innerHTML=html
        })}


   $(function(){ 
    var i=1;
    function auto(){
        $(".banner-img").html("").html(`<img src="image/banner${i}.png" alt="">`);
        $(".btn1").removeClass("red");
         $(".btn1:nth-child("+i+")").addClass("red")
        i++;i=(i==4)?1:i;
    }
    var time=setInterval(auto,2000);
    $(".btn1").mouseover(
        function(){
            clearInterval(time);
            $(this).siblings().removeClass("red");
            $(this).addClass("red")
            i=$(this).attr("abc");
            $(".banner-img").html("").html(`<img src="image/banner${i}.png" alt="">`);
            $(".btn1").removeClass("red");
            $(".btn1:nth-child("+i+")").addClass("red")
        })
    $(".btn1").mouseout(function(){
            time=setInterval(auto,2000)
        })
})
 
$(".nvfl2").mouseover(
    function(){
        $(".nvfl-wz").addClass("hover");
        $(this).children().addClass("nvfl-wz1");
        $(".nvfl1 img").css({"transform":"scale(1.1)","transition":"all .5s linear"})
        $(".nvfl2 img").css({"transform":"scale(1)","transition":"all .5s linear"})
    }
)

$("#super").hover(function(){
    $(".img-md>span:eq(0)").show()
    $(".img-md>span:eq(2)").show()
},
function(){
    $(".img-md>span:eq(0)").hide()
    $(".img-md>span:eq(2)").hide()
})

$("#super").mousemove(function(e){       
       var left=e.offsetX-106;
        var top=e.offsetY-118;
        var $divLg=$(".img-md>span:eq(2)");
        if(left<0)left=0;
             else if(left>248)left=248;
             if(top<0)top=0;
             else if(top>500)top=500;
             $(".img-md>span:eq(0)").css({left,top});
         var backgroundPosition=
        `${-40/248*left}px ${-414/500*top}px`;
      $divLg.css({backgroundPosition});
}
)

$(".nvfl1").mouseover(
    function(){
        $(".nvfl2").children().removeClass("nvfl-wz1");
        $(".nvfl-wz").removeClass("hover")
        $(".nvfl1 img").css({"transform":"scale(1)","transition":"all .5s linear"})
        $(".nvfl2 img").css({"transform":"scale(1.1)","transition":"all .5s linear"})
    }
)

$(".lbfl1>a>img").mouseover(
    function(){
        $(this).next().hide().next().css({"background":"transparent","display":"block"})
    }
)
$(".lbfl1>a>img").mouseout(
    function(){
        $(this).next().show().next().hide()
    }
)
var a=0;
function ab(){
     if(a>-3144){
     a=a-1048;
     $(".tplb").animate({marginLeft:a},500)}
     else{
        a=-1048;
        $(".tplb").css("margin-left","0")
        $(".tplb").animate({marginLeft:a},500)}  
     }
setInterval(ab,2000)

$(".zuo").click(
    function(){
        var $ml=$(".tplb").css("margin-left").replace("px","")
        var ml=$ml-1048;
        if(ml>-3144){$(".tplb").css("margin-left",ml+"px")}
        else{$(".tplb").css("margin-left",0)}
    }
)

$("#sj").click(
    function(){
        var a=$(this).parent().prev().attr("value")
        var b=parseFloat(a)+1;
        $(this).parent().prev().val(`${b}`)
    }
)

$("#sja").click(
    function(){
        var a=$(this).parent().prev().attr("value")
        var b=a-1;
        if(b>0){
        $(this).parent().prev().val(`${b}`)}
    }
)

$(".you").click(
    function(){
        var $mr=$(".tplb").css("margin-left").replace("px","")
        var mr=Number($mr)+Number(1048);
        if(mr<=0){$(".tplb").css("margin-left",mr+"px")}
        else {$(".tplb").css("margin-left","-2096px")}
    }
)

$("#sss").hide()
$(".ss p").click(
    function(){
    if($("#sss").css("display")=="none"){
    $("#sss").show()}
    else {$("#sss").hide()}
})



$("#ssss").hide()
$(".ss p").click(
    function(){
    if($("#ssss").css("display")=="none"){
    $("#ssss").show()}
    else {$("#ssss").hide()}
})


$(".nav-xl").hide()
$(".nav-li").mouseenter(
function(){
$(this).children().show()
})
$(".nav-li").mouseleave(
function(){
$(".nav-xl").hide()
}
)

$(".flwoman-nav li img").hide()
$(".flwoman-nav li").mouseenter(
function(){
$(this).children().show()
})
$(".flwoman-nav li").mouseleave(
function(){
$(".flwoman-nav li img").hide()
}
)

$(".flmen-nav li img").hide()
$(".flmen-nav li").mouseenter(
function(){
$(this).children().show()
})
$(".flmen-nav li").mouseleave(
function(){
$(".flmen-nav li img").hide()
}
)

$(".tj").hide()
$(".banner_tabs1").mouseenter(
function(){
$(".tj").show()
})
$(".banner_tabs1").mouseleave(
function(){
$(".tj").hide()
}
)

$(".tj1").hide()
$(".banner_tabs2").mouseenter(
function(){
$(".tj1").show()
})
$(".banner_tabs2").mouseleave(
function(){
$(".tj1").hide()
}
)

$(".tj2").hide()
$(".banner_tabs3").mouseenter(
function(){
$(".tj2").show()
})
$(".banner_tabs3").mouseleave(
function(){
$(".tj2").hide()
}
)

$(".men-xz-img").hide()
$(".men-xz-1").mouseenter(
function(){
$(".men-xz-img").show()
})
$(".men-xz-1").mouseleave(
function(){
$(".men-xz-img").hide()
}
)

$(".men-xz-3-img").hide()
$(".men-xz-3").mouseenter(
function(){
$(".men-xz-3-img").show()
})
$(".men-xz-3").mouseleave(
function(){
$(".men-xz-3-img").hide()
}
)

$(".men-xz-4-img").hide()
$(".men-xz-4").mouseenter(
function(){
$(".men-xz-4-img").show()
})
$(".men-xz-4").mouseleave(
function(){
$(".men-xz-4-img").hide()
}
)

$(".men-cs-1-img").hide()
$(".men-cs-1").mouseenter(
function(){
$(".men-cs-1-img").show()
})
$(".men-cs-1").mouseleave(
function(){
$(".men-cs-1-img").hide()
}
)

$(".men-dcs-1-img").hide()
$(".men-dcs-1").mouseenter(
function(){
$(".men-dcs-1-img").show()
})
$(".men-dcs-1").mouseleave(
function(){
$(".men-dcs-1-img").hide()
}
)

$(".men-dcs-2-img").hide()
$(".men-dcs-2").mouseenter(
function(){
$(".men-dcs-2-img").show()
})
$(".men-dcs-2").mouseleave(
function(){
$(".men-dcs-2-img").hide()
}
)

$(".men-yk-1-img").hide()
$(".men-yk-1").mouseenter(
function(){
$(".men-yk-1-img").show()
})
$(".men-yk-1").mouseleave(
function(){
$(".men-yk-1-img").hide()
}
)

$(".men-yk-2-img").hide()
$(".men-yk-2").mouseenter(
function(){
$(".men-yk-2-img").show()
})
$(".men-yk-2").mouseleave(
function(){
$(".men-yk-2-img").hide()
}
)

$(".xqjsimg img").click(
    function(){
        $(this).parent().siblings().removeClass("xqjsimg-1")
        $(this).parent().addClass("xqjsimg-1")
    }
)

$(".xqjs li").click(
    function(){
        $(this).siblings().removeClass("li")
        $(this).addClass("li")
    }
)

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

$(".e dl").hide()
    $(".e span").click(
            function(){
                if($(this).children().css("display")=="none"){
                    $("span dl").hide()
                    $(this).children().show()}
                else{$("span dl").hide()}
            })



$(".xqbox1 img").click(
    function(){
        var $fa=$(this).parent()
        var $href=$(this).attr("src")
        $fa.parent().next().children().attr("src",`${$href}`);
        $fa.siblings().removeClass("xt");
        $fa.addClass("xt")
    }
)

$(".woman-yf-1-img").hide()
$(".woman-yf-1").mouseenter(
function(){
$(".woman-yf-1-img").show()
})
$(".woman-yf-1").mouseleave(
function(){
$(".woman-yf-1-img").hide()
}
)

$(".woman-wt-1-img").hide()
$(".woman-wt-1").mouseenter(
function(){
$(".woman-wt-1-img").show()
})
$(".woman-wt-1").mouseleave(function(){
$(".woman-wt-1-img").hide()})

})()