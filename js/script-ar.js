$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.mynav').addClass("sticky");
        }else{
            $('.mynav').removeClass("sticky");

        }
        if(this.scrollY > 500){
            $('.scroll').addClass("show");
        }else{
            $('.scroll').removeClass("show");
        }
    }); 
    $('.scroll').click(function(){
        $('html').animate({scrollTop: 0})
    });
    // dropdown
    $(window).scroll(function(){
                if(this.scrollY > 20){
                    $('.dropdown__menu').addClass("sticky1");
                }else{
                    $('.dropdown__menu').removeClass("sticky1");
        
                }
                if(this.scrollY > 500){
                    $('.scroll').addClass("show");
                }else{
                    $('.scroll').removeClass("show");
                }
            });
    // navar/menu
    $('.menu-btn').click(function(){
        $('.mynav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); 
    })
    // owl carousel
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
}) ;
// typing Animation 
var typed = new Typed(".typing",{
    strings: [" فرع مصر " ," فرع دبي " , " فرع جامبيا "],
    typeSpeed:100,
    backSpeed:60 ,
    loop: true ,
});
var typed = new Typed(".typing-2",{
    strings: [" فرع سويسرا "," فرع مصر " ," فرع دبي " , " فرع جامبيا " ],
    typeSpeed:100,
    backSpeed:60 ,
    loop: true ,
});

// start loading-overlay
$(window).load(function()
{
    $("body").css("overflow","auto");

    $(".loading-overlay h1").fadeOut(2000,
    function()
    {
        $(this).parent().fadeOut(2000,
        function()
        {
            $(this).remove();
        });
    });
});

// slider






