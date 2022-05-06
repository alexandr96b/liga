$(document).ready(function () {

$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');

});

// === Begin button ripple style === \\\
$(".ripple").on("click", function(event) {
   var _this = $(this),
       offset = $(this).offset(),
       positionX = (event.pageX - offset.left),
       positionY = (event.pageY - offset.top);
   _this.append("<span class='ripple-effect'>");
   _this.find(".ripple-effect").css({
       left: positionX,
       top: positionY
   }).animate({
       opacity: 0,
   }, 1500, function() {
       $(this).remove();
   });
});
// === End button ripple style === \\\

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop());

    if(scrolledpx > 200){
        $('.b-header').addClass('header-fix');
    } else if(scrolledpx < 199){
        $('.b-header').removeClass('header-fix');
    }

});


$('.btn-nav').click(function(){
    $('.b-nav , .b-container , body').toggleClass('active');
    $('.btn-nav').toggleClass('active');
    $(document).on('click', function(event) {
        if (!$(event.target).closest(".b-nav , .btn-nav").length) {
            $('.b-nav , .b-container , body').removeClass('active');
            $('.btn-nav').removeClass('active');
        }
        event.stopPropagation();
    });
});

$('.b-nav > ul > li > a').click(function(){
    $('.b-nav , .b-container , body').removeClass('active');
    $('.btn-nav').removeClass('active');
});


// === Begin modal === \\\
$(".modal-link").on("click", function() {
    $('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"] , body').addClass("active");
    $('body').addClass('b-active');
    $('.b-nav , .b-container , .btn-nav ').removeClass('active');

    $(document).on("click", function(e) {
        if(!$(e.target).closest(".b-modal").length && !$(e.target).closest(".modal-link , .b-nav , .btn-nav").length) {
            $(".modal-overlay , body").removeClass("active");
            $('body').removeClass('b-active');
        }
    });

});

$(".b-modal__static-close").on("click", function() {
    $(".modal-overlay").removeClass("active");
});
// === End modal === \\\


$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".video").attr('controls', 'controls');
        $(this).children(".playpause").fadeOut();

    }else{
        $(this).children(".video").get(0).pause();
        $(this).children(".video").removeAttr('controls', 'controls');
        $(this).children(".playpause").fadeIn();

    }
});

$('.video2').parent().click(function () {
    if($(this).children(".video2").get(0).paused){
        $(this).children(".video2").get(0).play();
        $(this).children(".video2").attr('controls', 'controls');
        $(this).children(".b-slider__overlay").fadeOut();
        $(this).children(".playpause2").fadeOut();

    }else{
        $(this).children(".video2").get(0).pause();
        $(this).children(".video2").removeAttr('controls', 'controls');
        $(this).children(".b-slider__overlay").fadeIn();
        $(this).children(".playpause2").fadeIn();

    }
});



var swiper = new Swiper( '.b-slider', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".b-slider__btn-next",
        prevEl: ".b-slider__btn-prev",
    },
    paginationClickable: true,
    effect: 'coverflow',
    loop: false,
    speed: 1000,
    initialSlide: 1,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows : false,
    }
} );


    window.onload = function ()
    {
        var imgs = document.querySelectorAll('.b-dot'),
            len = imgs.length,
            i = len - 1;

        (function go()
        {
            imgs[i].classList.remove('active');
            i++;
            if ( i == len) i = 0;
            imgs[i].classList.add('active');
            window.setTimeout(go, 900);

        })()
    }


// google maps

// When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,
            disableDefaultUI: true,

            // The latitude and longitude to center the map (always required)

            center: new google.maps.LatLng(59.729454761406856, 30.075034931901428), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#7b7b7b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#070707"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]

        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(59.729454761406856, 30.075034931901428),
            map: map,
            title: 'Snazzy!',
            icon: {
                url: "images/flags.svg",
                scaledSize: new google.maps.Size(92, 129),
                labelOrigin: new google.maps.Point(145, 25, 5),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(36, 49)
            }

        });

    }


var $page = $('html, body');
$('.nav-list a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

    // Fancybox Single Videos
    $(".fancybox-single").fancybox({

        afterShow: function() {
            // After the show-slide-animation has ended - play the video
            this.content.find('video').trigger('play')
            // Trigger fancybox.close() once the video has ended
            this.content.find('video').on('ended', function() {
                $.fancybox.close();
            });
        }

    });


    function moveMenu(){
        if ($(window).width() < 767) {
            $(function(){

                $('.b-footer__right #map').appendTo('.map-xs');


            })
        } else{
            $(function(){


                $('.map-xs #map').appendTo('.b-footer__right');

            })
        }
    }
    moveMenu();

    $(window).resize(function(){
        moveMenu();
    });

});



