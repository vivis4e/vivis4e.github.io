$(document).ready(function() {
    $("#a-scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    $("#s-scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1500);
    });

    $("#g-scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 1500);
    });

    $("#e-scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#experiences").offset().top
        }, 1500);
    });

    $("#c-scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });

    $('#night').change(function(){
        if($(this).is(":checked")) {
            $('.bg').addClass('bg-dark');
            $('.header__logo').addClass('text-white');
            $('.heading__position').addClass('text-white');
            $('.heading__greet').addClass('text-white');
            $('#about').addClass('about-dark');
            $('.about__img').addClass('about__img-dark');
            $('.subTitle').addClass('text-white');
            $('#services').addClass('bg-dark');
            $('#gallery').addClass('about-dark');
            $('#experiences').addClass('bg-dark');
            $('.job').addClass('job-dark');
            $('.job__position').addClass('text-white');
            $('.footer').addClass('about-dark');
            $('.footer__icon').addClass('icon-dark');
            $('.cta__heading').addClass('text-white');
            $('.cta__line').addClass('bg-white');
            $('.cta__button').addClass('btn-white');
            $('.menu__btn').addClass('bg-dark');
            $('.header__menu').addClass('hvr2');
            $('.menu__content').addClass('bg-dark');
            $('.menu__item').addClass('text-white');
            $('.menu__item').addClass('hvr');
            $('.menu__night').addClass('text-white');
            $('.line__hr').addClass('hr-dark');
        } else {
            $('.bg').removeClass('bg-dark');
            $('.header__logo').removeClass('text-white');
            $('.heading__position').removeClass('text-white');
            $('.heading__greet').removeClass('text-white');
            $('#about').removeClass('about-dark');
            $('.about__img').removeClass('about__img-dark');
            $('.subTitle').removeClass('text-white');
            $('#services').removeClass('bg-dark');
            $('#gallery').removeClass('about-dark');
            $('#experiences').removeClass('bg-dark');
            $('.job').removeClass('job-dark');
            $('.job__position').removeClass('text-white');
            $('.footer').removeClass('about-dark');
            $('.footer__icon').addClass('icon-dark');
            $('.cta__heading').removeClass('text-white');
            $('.cta__line').removeClass('bg-white');
            $('.cta__button').removeClass('btn-white');
            $('.menu__btn').removeClass('bg-dark');
            $('.header__menu').removeClass('hvr2');
            $('.menu__content').removeClass('bg-dark');
            $('.menu__item').removeClass('text-white');
            $('.menu__item').removeClass('hvr');
            $('.menu__night').removeClass('text-white');
            $('.line__hr').removeClass('hr-dark');
        }
    });
})