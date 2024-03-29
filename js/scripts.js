
$('#menuBtn').on('click', function () {
    $('#menuBtn, header, body').toggleClass('active');
});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 3,
    dots: false,
    speed: 300,
    variableWidth: true,
    centerMode: true,
});
$(".planing-slider").slick('slickUnfilter');
$(".planing-slider").slick('slickFilter', '.one');

$(".filter__btn").on('click', function () {
    var filter = $(this).data('filter');
    $(".planing-slider").slick('slickUnfilter');

    if (filter == 'one') {
        $(".planing-slider").slick('slickFilter', '.one');
    }
    else if (filter == 'second') {
        $(".planing-slider").slick('slickFilter', '.second');
    }
    else if (filter == 'third') {
        $(".planing-slider").slick('slickFilter', '.third');
    }
    else if (filter == 'all') {
        $(".planing-slider").slick('slickUnfilter');
    }

})

$('.filter__btn').on('click', function () {
    $('.filter__btn').not($(this)).removeClass('active')
    $(this).addClass('active');
});

function hideModals() {
    $('.modal').fadeOut();
    $('.modal, body, [data-modal]').removeClass('active');
};
$(function () {
    function showModal(id) {
        if ($(id).hasClass('active')) {
            $(id).fadeOut(300)
            $(id).removeClass('active');
            $('body').removeClass('active');
        } else {
            $(id).addClass('active')
            $('body').addClass('active');
            $(id).fadeIn(300);
        }
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.nav').length) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('btn-menu')) ||
            ($(e.target).hasClass('modal-content'))
        )) {
            hideModals();
        }
    });
});

$("form").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    sender = "../telegram.php";
    $.ajax({
        type: "POST",
        method: 'POST',
        url: sender,
        data: $(this).serialize()
    }).done(function () {
        $('form .btn').removeAttr('disabled');
        $('form').trigger('reset');
        $('.modal').fadeOut(); alert('Спасибо, за заявку , ожидайте с вами свяжется специалист');
    }); return false;
});
