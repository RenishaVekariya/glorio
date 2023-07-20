$(document).ready(function () {

    // --------preloader -----------------
    // $('main').hide();
    // setTimeout(function () {
    $('#preloader').fadeOut(500);
    //     $('main').show()
    // }, 3000)

    $('.top_scroll').hide();

    $(window).scroll(function () {
        h = $(window).scrollTop();
        if (h > 160) {
            $('#header-sticky').addClass('top_fixed');
            $('.top_scroll').fadeIn(500);
            $('.top_scroll').addClass('transform')

        }
        else {
            $('#header-sticky').removeClass('top_fixed');
            $('.top_scroll').fadeOut(500)
            $('.top_scroll').removeClass('transform')


        }
    })

    $('.top_scroll').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 550)
    })

    $('.list').hide();

    $('.nice-select ').click(function () {
        $('.nice-select .current').siblings('.list').slideToggle();

    })

    $('.nice-select ').click(function () {
        $('.nice-select .current i ').toggleClass('rotate-90')

    })

    $('.nice-select').click(function () {
        $(this).siblings('.list').slideToggle();
    })




    $('.mo-sub-menu').hide();
    $('.mo-peta-menu').hide();

    $('.mo-main-menu li a').click(function () {
        $(this).siblings('.mo-sub-menu').slideToggle();
    })

    $('.mo-sub-menu li a').click(function () {
        $(this).siblings('.mo-peta-menu').slideToggle();
    })

    $('.mo-sub-menu li').click(function(){
        $('.mo-main-menu li i').click(function () {
            $(this).toggleClass('fa-plus fa-minus');
            $(this).toggleClass('mean-click');
        })
    })

    $('.blog__comment-input input , .sidebar__search input , .glo-contact-form input , .glo-contact-form textarea ').focusin(function () {
        $(this).css('border', '1px double #7E531A');
    })


    $('.blog__comment-input input , .sidebar__search input , .glo-contact-form input , .glo-contact-form textarea ').focusout(function () {
        $(this).css('border', '1px double transparent');
    })
    $('.blog__comment-input textarea').focusin(function () {
        $(this).css('border', '1px double #7E531A');
    })
    $('.blog__comment-input textarea').focusout(function () {
        $(this).css('border', '1px double transparent');
    })

    // --------------gallery---------
    $('.gallery__filter-button button').on('click', function () {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');

    });

    // ------------- pricing-plan------------------



    $('.nav-tabs .nav-item .nav-link').on('click', function () {

        $('.nav-tabs .nav-item .nav-link').removeClass('active')
        $(this).addClass('active');

        $('.nav-tabs .nav-item').click(function () {
            index = $(this).index();

            $('.tab-pane').hide();
            $('.tab-pane').eq(index).show().fadeIn();
        })

    })

    //  -----------------------  menu  ------------------------


    $('.nav-button ul li button').click(function () {
        $('.nav-button ul li button').removeClass('active')
        $(this).addClass('active');



        $('.nav-button ul li ').click(function () {
            index = $(this).index();

            $('.tab-pane-menu').hide()
            $('.tab-pane-menu').eq(index).show().fadeIn();
        })

    })

 
    $(' .glo-food-menu-2 .tab-pane-menu .glo-food-menu-item').click(function () {
        $(' .glo-food-menu-2 .tab-pane-menu .glo-food-menu-item').removeClass('active');
        $(this).addClass('active')
        $(' .glo-food-menu-2 .tab-pane-menu .glo-food-menu-item').removeClass('active');
        $(this).addClass('active')
        $(' .glo-food-menu-2 .tab-pane-menu .glo-food-menu-item').removeClass('active');
        $(this).addClass('active')

      
        $('.glo-food-menu-2 .tab-pane-menu .glo-food-menu-item ').click(function(){
            index = $(this).index();
            //    alert(index)

            $('.tab-pane-img').hide();
            $('.tab-pane-img').eq(index).show().fadeIn();

            
            $('.tab-pane-img-1').hide();
            $('.tab-pane-img-1').eq(index).show().fadeIn();

            
            $('.tab-pane-img-2').hide();
            $('.tab-pane-img-2').eq(index).show().fadeIn();
        
        })
            

        // $(' .tab-content-img .tab-pane-img').removeClass('active');
        // $(this).addClass('active')
  
       
    })
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 200);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }




    $("#banner").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        autoplayTimeout: 6000,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
    });

    $("#location").owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        margin: 25,
        center: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20,

            },

            576: {
                items: 2,
                margin: 0,

            },

            768: {
                items: 2,

            },
            992: {
                items: 3,

            },
            1200: {
                items: 3,
            }

        }
    });

    $("#brand").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },

            576: {
                items: 2,
            },

            768: {
                items: 3,

            },
            992: {
                items: 4,

            },
            1200: {
                items: 4,
            }

        }
    });

    $("#food").owlCarousel({
        items: 2,
        loop: true,
        margin: 40,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 2,
            },

            768: {
                items: 1,
                dotsEach: 2,

            },
            992: {
                items: 1,
                dotsEach: 2,

            },
            1200: {
                items: 2,
            }
        }
    });

    $("#gallery").owlCarousel({
        items: 3,
        loop: true,
        // margin:20,
        autoplay: true,
        dots: false,


    });

    $('.glo-gallery-item-link a span').click(function () {
        $('a').attr[target = '_blank'].show
    })
    $('.glo-gallery-item-link a span ').hover(function () {
        $(this).css('color', '#7E531A')
    })

    $("#testimonial").owlCarousel({
        items: 3,
        loop: true,
        margin: 50,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 3,

            },

            768: {
                items: 1,
                dotsEach: 3,

            },
            992: {
                items: 2,
                dotsEach: 3,

            },
            1200: {
                items: 3,
            }
        }
    });

    $("#hotal-staff").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        // responsive: {
        //     0: {
        //         items: 1,
        //     },

        //     768: {
        //         items: 2,
        //     },
        //     992:{
        //         items:3,
        //     }
        // }

    });

    $("#team-2").owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },

            567: {
                items: 1,
            },

            768: {
                items: 2,
            }

        }
    });

    $("#service").owlCarousel({
        items: 3,
        loop: true,
        margin: 45,
        stagePadding: 100,
        // autoplay: true,
        dots: false,
        center: true,
        // nav: true,
        // navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,

            },
            576: {
                items: 1,
                stagePadding: 0,
            },

            768: {
                items: 1,
                stagePadding: 250,

            },
            992: {
                items: 2,
                stagePadding: 150,

            },
            1200: {
                items: 3,
                // stagePadding:150,

            }
        }
    });

    $('#review').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
    })
    // $("#feedback").owlCarousel({
    //     items:3,
    //     loop: true,
    //     margin: 30,
    //     dots:false,
    //     nav:true,
    //     navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],

    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },

    //         567:{
    //             items:2,
    //         },

    //         768: {
    //             items: 2,
    //         },

    //         992:{
    //             items:3,
    //         }

    //     }
    // });

    // $("#team-3").owlCarousel({
    //     items: 3,
    //     loop: true,
    //     margin: 30,
    //     // autoplay: true,
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         556:{
    //             items:2
    //         },

    //         768: {
    //             items: 2,
    //         },
    //         992:{
    //             items:3,
    //         },

    //     }
    // });








    new WOW().init();

    var owl = $('#banner');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();

    });

    AOS.init({
        duration: 1200,
    });

});



$(document).ready(function () {

    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.gallery__filter-button').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    // ---------fancy box ------------

    $("a.image-popups").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });


})
