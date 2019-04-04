$(function(){
   
if(location.search!==""){
    var lid=location.search.split("=")[1];
    $.ajax({
        url:"http://localhost:3000/details",
        type:"get",
        data:{lid},
        dataType:"json",
        success:function(result){
            console.log(result);
            var {pics,product,specs}=result;
        $("#details>h6:first").html(`${product.title}`)
        .next().html(`<a class="small text-dark font-weight-bold" href="javascript:;">${product.subtitle}</a>`)
        .next().find("div>h2").html("¥"+product.price.toFixed(2))
        .parent().next().children().last().html(`${product.promise}`)
       
        var html="";
        for(var i=0;i<specs.length;i++){
            html+=`<a class="btn btn-sm btn-outline-secondary ${specs[i].lid==lid?'active':''}" href="product_details.html?lid=${specs[i].lid}" class="active">${specs[i].spec}</a>`
        }
        $("#details>div:eq(1)>div:eq(1)").html(html)

        var html1=""
        for(var p of pics){
            html1+=`<li class="float-left p-1">
            <img src="${p.sm}" data-md="${p.md}" data-lg="${p.lg}">
          </li>`
        }
        var $ul=$("#preview>div>div:last ul").html(html1)
        .css("width",pics.length*62)
        var $mImg=$("#preview>div>img").attr({src:pics[0].md})
        var $divLg=$("#div-lg").css({backgroundImage:`url(${pics[0].lg})`});

        var $btnLeft=$("#preview>div>div>img:first");
        var $btnRight=$btnLeft.next().next();
        var moved=0;
        if(pics.length<5){$btnRight.addClass("disabled")}
        $btnRight.click(function(){
            if($(this).is(":not('.disabled')")){
            moved++;
            $ul.css({marginLeft:-62*moved})
        $btnLeft.removeClass("disabled")
        if(moved+4==pics.length){$btnRight.addClass("disabled")}
        }
        })
        $btnLeft.click(function(){
            if($(this).is(":not(.disabled)")){
            moved--;
            $ul.css({marginLeft:-62*moved})
            $btnRight.removeClass("disabled")
            if(moved==0){$btnLeft.addClass("disabled")}
        }
        })

        $ul.on("mouseenter","li>img",function(){
            var $img=$(this);
            var src=$img.attr("data-md");
            $mImg.attr({src});
            var backgroundImage=`url(${$img.attr("data-lg")})`;
            $divLg.css({backgroundImage})
        })

        var $mask=$("#mask");
        var $super=$("#super-mask");
        var max=176;
        $super.hover(function(){
            $mask.toggleClass("d-none");
            $divLg.toggleClass("d-none");
        })
        .mousemove(function(e){
             var left=e.offsetX-88;
             var top=e.offsetY-88;
             if(left<0)left=0;
             else if(left>max)left=max;
             if(top<0)top=0;
             else if(top>max)top=max;
             $mask.css({left,top});
         var backgroundPosition=
        `${-16/7*left}px ${-16/7*top}px`;
      $divLg.css({backgroundPosition});
        })

    }   
    })
}
})