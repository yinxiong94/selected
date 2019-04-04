(function(){
    $("#dl").click(
        function(){
            var  phone=$("#phone").val();
            var upwd=$("#upwd").val();
            $.ajax({
                url:"http://127.0.0.1:3000/login",
                type:"post",
                data:{phone,upwd},
                dataType:"json"
            })
            .then(function(result){
                console.log(result)
                if(result.code==1){
                document.cookie=phone;
                alert("登录成功，3秒后自动跳转");
                setTimeout(function(){
                    location.href="index.html"},3000)    
                }
            })
        }
    )
})()