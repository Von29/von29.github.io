// ---------------------------------------SWAP THEME---------------------------------------

var theme = document.getElementById("theme");
theme.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        aside__img.src = "images/sun.png";
    }
    else {
        aside__img.src = "images/moon.png";
    }
}

// ---------------------------------------MIXER---------------------------------------
$(function () {
    var mixer = mixitup('.blog__content-box');

    // ---------------------------------------SLAIDER---------------------------------------
    $('.customers__box').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,

        speed: 500,
        // autoplay: true,
        autoplayspeed: 2,

        dots: true,
        appendDots: $('.customers__slider-buttons'),
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1
                },
            },
            {
                breakpoint: 450,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                }
            }
        ],
    })

    $('.customers__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.customers__box').slick('slickPrev')
    })
    $('.customers__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.customers__box').slick('slickNext')
    })

    // ---------------------------------------ACCORDEON---------------------------------------
    $('.questions__link-box').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__link-box--active')) {
            $(this).removeClass('questions__link-box--active')
            $(this).children('.questions__text').slideUp()
        } else {
            $('.questions__link-box').removeClass('questions__link-box--active')
            $('.questions__text').slideUp()
            $(this).addClass('questions__link-box--active')
            $(this).children('.questions__text').slideDown()
        }
    })

    // ---------------------------------------RATE---------------------------------------
    $(function () {
        $(".rateYo").rateYo({
            rating: 4.5,
            // readOnly: true,
            starWidth: "36px",
            spacing: "2px",
            starSvg: '<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255466 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286615 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z"/></svg>'
        });
        $(".rateYo").rateYo("option", "normalFill", "#D7D1C7");
        $(".rateYo").rateYo("option", "ratedFill", "#661CE7");
    });
    $('.blog__filter-btn').on('click', function () {
        $('.blog__filter-btn').removeClass('blog__filter-btn--active')
        $(this).addClass('blog__filter-btn--active')
    })
})

// ---------------------------------------MAP---------------------------------------
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.705186968505195, lng: -74.01377966739278 },
        zoom: 14,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    });
}
window.initMap = initMap;
// ---------------------------------------POPUP---------------------------------------
$('.open-popup').click(function (e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(300);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.popup-bg').fadeOut(100);
    $('html').removeClass('no-scroll');
});

// ---------------------------------------BURGER---------------------------------------

// $('.burger').click(function (e) {
//     e.preventDefault()
//     $('.menu').toggleClass('menu--open')
// });

setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.menu').hasClass('menu--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0);

$('.burger, .overlay, .menu a').on('click', function (e) {
    e.preventDefault()
    $('.menu').toggleClass('menu--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('open')
})



