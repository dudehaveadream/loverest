$(document).ready(function(){

    // Mask func
    $("input[name='phone']").inputmask("+7(999) 999 - 99 - 99" ,{ clearMaskOnLostFocus: false });

    // Go top func
    $("#gotop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    // Categories toggle func
    $('.categories-holder .categories-section').hide();
    $('.categories-holder .categoriesToggle').click(function(){
        $(this).toggleClass("open");
        $('.categories-holder .categories-section').slideToggle();
    });

    // Login func
    $('.header-login').hide();
    $('.header-visible #loginOpen').click(function(){
        $('.header-login').slideDown();
        $('.header-visible-inner').fadeOut();
    });
    $('.header-login #loginClose').click(function(){
        $('.header-login').slideUp();
        $('.header-visible-inner').fadeIn();
    });

    $('.header-location').hide();
    $('.header-visible #locationOpen').click(function(){
        $('.header-location').slideDown();
        $('.header-visible-inner').fadeOut();
    });
    $('.header-location #locationClose').click(function(){
        $('.header-location').slideUp();
        $('.header-visible-inner').fadeIn();
    });

});