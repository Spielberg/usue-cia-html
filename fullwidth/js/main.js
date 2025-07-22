(function ($) {
    "use strict";

    // preloader
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });

    // Events when window is scrolled
    $(window).on('scroll', function () {
        // site_header
        if ($(this).scrollTop() >= 0) {
            $('.site_header').addClass('menu_sticky');
        } else {
            $('.site_header').removeClass('menu_sticky');
        }
    });

    // Events when document is ready
    $(document).ready(function () {

        // image_slider
        $('.image_slider').owlCarousel({
            loop: false,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            margin: 10,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                '<span class="owl-prev-btn"><img src="img/arrow_left.svg" class="slider_arrow arrow_left" alt=""></span>',
                '<span class="owl-next-btn"><img src="img/arrow_right.svg" class="slider_arrow arrow_right" alt=""></span>'
            ]
        });


        // modal_slider
        var modalSlider = $('.modal_slider');

        // Initialize Owl Carousel
        modalSlider.owlCarousel({
            loop: false,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            margin: 10,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                '<span class="owl-prev-btn"><img src="img/arrow_left.svg" class="slider_arrow white_img arrow_left" alt=""></span>',
                '<span class="owl-next-btn"><img src="img/arrow_right.svg" class="slider_arrow white_img arrow_right" alt=""></span>'
            ]
        });

        // Handle pagination button click
        $('.slider_pagination button').on('click', function () {
            var slideNumber = $(this).attr('data-slide-number');

            // Find index of the slide matching data-slide-item
            var slideIndex = $('.modal_slider').find(`[data-slide-item="${slideNumber}"]`).parent().index();

            modalSlider.trigger('to.owl.carousel', [slideIndex, 500, true]);
        });

        // Highlight active pagination button
        modalSlider.on('changed.owl.carousel', function (event) {
            var currentIndex = event.item.index;
            var currentSlide = $('.modal_slider .owl-item').eq(currentIndex).find('.modal_img').attr('data-slide-item');

            $('.slider_pagination button').removeClass('active');
            $(`.slider_pagination button[data-slide-number="${currentSlide}"]`).addClass('active');
        });


        jQuery(document).ready(function ($) {
            // Your code in here
            const cursorDot = $(".cursor-dot");
            const cursor = $(".cursor");
            const link = $("a");

            $(document).on("mousemove", (e) => {
                const x = e.clientX;
                const y = e.clientY;
                cursorDot.css("transform", `translate(${x}px, ${y}px)`);
            });

            link.on("mouseenter", () => {
                cursor.addClass("hovered");
            });

            link.on("mouseleave", () => {
                cursor.removeClass("hovered");
            });
        });

    });

})(jQuery);

