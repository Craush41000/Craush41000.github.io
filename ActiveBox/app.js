$(function () { // запись позволяющая дождаться загрузки всего документа
    /* Fixed Header */
    let header = $("#header"); // добавляет ID
    let intro = $("#intro");
    let introH = intro.innerHeight();// определяет высоту элемента с отступом(padding)
    let scrollPos = $(window).scrollTop();// определяет скролл(движение колесиком вверх или вниз:) 
    let nav = $("#nav"); 
    let navToggle = $("#navToggle"); 
    checkScroll(scrollPos, introH);
    $(window).on("scroll resize", function () { // позволяет следить за скроллом
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);

    });
    //    Если наша позиция скролла больше чем высота блока intro, то выдаем класс header.addClass("fixed"),если меньше то класс header.removeClass("fixed");   

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed"); // добавляет класс
        } else {
            header.removeClass("fixed"); // удаляет класс   
        }
    }
    /*Smooth scroll (плавный скролл)*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault(); // отменяет стандартное поведение ссылки при клике
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;// указывает отступ 
        nav.removeClass("show");// окно бургер-меню исчезает
        $("html, body").animate({
            scrollTop: elementOffset - 70 // плавный скролл
        }, 700);
    });
    
    /*Nav Toggle показывает наше бургер-меню*/ 
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
    /*Reviews:https://kenwheeler.github.io/slick/*/
    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true, // бесконечный скролл(прокрутка)
        slidesToShow: 1, // сколько показываем слайдов
        slidesToScroll: 1, // сколько будем скроллить слайдов при клике на скролл
        fade: true, // затемнение отзывов
        arrows: false,
        dots: true
    });
});
