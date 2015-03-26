$(document).ready(function(){

    $("#gotop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    $('.categories-holder .categories-section').hide();
    $('.categories-holder .categoriesToggle').click(function(){
        $('.categories-holder .categories-section').slideToggle();
    });

    $('.header-login').hide();
    $('.header-visible #loginOpen').click(function(){
        $('.header-login').slideDown();
        $('.header-visible-inner').fadeOut();
    });
    $('.header-login #loginClose').click(function(){
        $('.header-login').slideUp();
        $('.header-visible-inner').fadeIn();
    });

    $(".location-list").mCustomScrollbar({
        scrollButtons:{
                enable:true
            }
    });
    $(".header-visible #locationToggle").click(function(){
        if($(".header-visible .location-list").is(":hidden")){
            $(".header-visible .location-list").fadeIn();
        }
        else{
            $(".header-visible .location-list").fadeOut();
        }
    });
    $("*").click(function(e){
        if($(e.target).closest(".header-visible #locationToggle").length==0 && $(e.target).closest(".header-visible .location-list").length==0){
            $(".header-visible .location-list").fadeOut();
        }
    });

});