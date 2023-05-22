

if ($('div').hasClass('tlc-img')) {
    $('.tlc-slider').slick({
        infinite: false,
        speed: 300,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        slidesToShow: 1,
        asNavFor: '.tlc-nav',
        touchThreshold: 9,
        fade: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    fade: false,
                    infinite: true,
                }
            }
        ]
    });
    $('.tlc-nav').slick({
        vertical: true,
        infinite: false,
        draggable: true,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        verticalSwiping: true,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.tlc-slider',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 700,
                settings: "unslick"
            }
        ]
    });
}
