(function ($) {
	"use strict";


       function clients_review_slider(){  
            $('.clients-review-slides').owlCarousel({
                loop:true,
                margin:0,
                dots: true,
                nav:true,
                items: 1,
                mouseDrag: true,
                touchDrag: true,
                navText: ["<i class='fa fa-long-arrow-alt-left'></i>","<i class='fa fa-long-arrow-alt-right'></i>"],
                autoplay: false,
                smartSpeed: 1000,
                autoplayTimeout:5000,
            })
        };
        clients_review_slider(); 

}(jQuery));	