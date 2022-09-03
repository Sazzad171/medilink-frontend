jQuery(document).ready( function () {
    "use strict";

    // show/hide search
    $(".search-popup .backdrop").click(
        function hideSearch() {
            $(".search-popup").removeClass("show");
        }
    );
    $(".main-header .search-icon").click(
        function showSearch() {
            $(".search-popup").addClass("show");
        }
    );

    // navbar before/after scroll
    $(window).scroll(() => {
        if ($(window).scrollTop() > 200) {
            $(".main-header").addClass("scrolled");
        }
        else {
            $(".main-header").removeClass("scrolled");
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

    $('.owl-carousel').on('changed.owl.carousel', function(event) {
        $(".testimonial-hash-items img").removeClass("current");
        var current = event.item.index;
        var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
        $('.nav-' + hash + ' img').addClass('current');
    });

    // counter up initialize
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
});