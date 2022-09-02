(function ($) {
    "use strict";

    // navbar before/after scroll
    $(window).scroll(() => {
        if ($(window).scrollTop() > 0) {
            $("header").addClass("scrolled");
        }
        else {
            $("header").removeClass("scrolled");
        }
    });

    // video popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: true
    });

    // testimonial slider
    $('.testimonial-single').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        dots:false,
        autoplay:false,
        autoplayTimeout:4000,
        autoplaySpeed: 2000,
        URLhashListener:true
    })
    $('.testimonial-hash-items').owlCarousel({
        loop:false,
        margin: 2,
        nav:false,
        items:4,
        dots:false,
        URLhashListener:true
    });

    // toggle current class in testimonial image
    $(".testimonial-hash-items img").click(function () {
        $(".testimonial-hash-items img").removeClass("current");
        $(this).addClass('current');
    });
    
})(jQuery);