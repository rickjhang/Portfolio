$(document).ready(function(){  
    $('#goCM').click(function () {
        if($(window).width() > 768){  
            $('html,body').animate({ scrollTop: $('.ftTitle').offset().top }, 800);
        }else{
            $('html,body').animate({ scrollTop: $('.ftTitle').offset().top }, 800);
            $("#menu-contorl").prop("checked",false);
        }
    }); 
})