$(function(){
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })//over

    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })//out

    // slide

    // var n =0; //0 1 2 3
    // setInterval(function(){
    //     //n = (n+1) % 4 ; // 0 1 2 3

    //     if(n == 3){
    //         n = 0;
    //     }else{
    //         n++;
    //     }//if else

    //     $(".top_move").animate({top : (n * -400) + "px"});
    // },1500)

    setInterval(function(){
        $(".top_move").animate({top : "-400px"},500,function(){
            $(".top_move").append($(".top_move li").eq(0));
            $(".top_move").css({top : "0"})
        })
    },1500)//

    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on");
        $(this).addClass("on");
        $(".contents ul").hide();
        $(this).next().css({display : "flex"});
    })//contents h2 click

    $(".p_click").click(function(){
        $(".pop").slideDown();
    })//p_click

    $(".close").click(function(){
        $(".pop").slideUp();
    })//close click
})//jQuery