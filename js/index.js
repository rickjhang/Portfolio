$(document).ready(function(){  
    $('#goCM').click(function () {
        if($(window).width() > 768){  
            $('html,body').animate({ scrollTop: $('.ftTitle').offset().top }, 800);
        }else{
            $('html,body').animate({ scrollTop: $('.ftTitle').offset().top }, 800);
            $("#menu-contorl").prop("checked",false);
        }
    });
    

    if($(window).width()<768){
        setInterval(function(){
            $(".iaImg img").css({"opacity":"0","transition":"1.5s"});
            setTimeout(function(){
                $(".iaImg img").css({"opacity":"1","transition":"1.5s"});
            },5000)
        },9000)
    }else{
        $(".iaImg img").mouseover(function(){
            $(this).css({"opacity":"0","transition":"0.5s"})
        })
        $(".iaImg img").mouseout(function(){
            $(this).css({"opacity":"1","transition":"0.5s"})
        })
    }

})