
$('#menuBtn').on('click', function () {
    $('#menuBtn, header, body').toggleClass('active');
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    dots: false,
    speed: 300,
    variableWidth: true,
    centerMode: true,
});

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
