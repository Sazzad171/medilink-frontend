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
        URLhashListener:true
    })
    $('.testimonial-hash-items').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:3,
        dots:false,
        center: true,
        URLhashListener:true
    });
    
})(jQuery);