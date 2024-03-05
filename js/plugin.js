
// alert($('.Featured-Work .shuffle-images div img').first().attr("class"));
// alert($('.Featured-Work .shuffle-images div img:first-of-type').attr("class"));
// alert($('.shuffle-images .row').children().length);
$(function(){
    "use strict";
    var WinH = $(window).height(),
        UpBarH = $('.Uper-bar').innerHeight(),
        NavbarH = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(WinH-(UpBarH + NavbarH));
});
$('.Featured-Work li').on('click',function(){

    // if($(this))
    // alert($(this).attr("class"));
    $(this).addClass('active').siblings().removeClass('active');
    // console.log($(this).data("class"));
    if($(window).width()<= 767.98)
    {
        if($(this).data("class")=="all")
        {
            $('.Featured-Work .shuffle-images .row div').css('display','inline-block'); 
        }
        else
        {
            $('.Featured-Work .shuffle-images .row div').css('display','none');
            $($(this).data("class")).css('display','inline-block');
        }
    }
    else
    {
    if($(this).data("class")=="all")
    {
        $('.Featured-Work .shuffle-images .row div').css('opacity',1); 
    }
    else
    {
        $('.Featured-Work .shuffle-images .row div').css('opacity','0.2');
        $($(this).data("class")).css('opacity',1);
    }
}
});

$('.footer .helpfull-links ul li a').before('<i style="color:#656262;margin-right:7px;">&#10095;</i>');
$(".blog-content .list-navigation ul li").on("click",function(){
    $(this).addClass("active-nav");
    $(this).parent().siblings().children().removeClass("active-nav");
});