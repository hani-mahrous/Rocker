$(document).ready(function () {

    // Main Slider
    $('.main-slider').owlCarousel({
        dots: true,
        nav: true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    // Category Slider
    $('.category-slider').owlCarousel({
        dots: true,
        nav: false,
        margin: 4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    // Testimolials slider
    $('.testi-slider').owlCarousel({
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    // Event slider
    $('.event-slider').owlCarousel({
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    
    // Clients slider
    $('.client-slider').owlCarousel({
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })





});