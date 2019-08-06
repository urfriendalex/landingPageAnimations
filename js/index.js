
const doc = document.querySelector('html, body');
const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')

const hamburger1 = document.querySelector('.hamburger span:nth-of-type(1)')
const hamburger2 = document.querySelector('.hamburger span:nth-of-type(2)')
const hamburger3 = document.querySelector('.hamburger span:nth-of-type(3)')

const headline = document.querySelector('.headline')

const navslider = document.querySelector('.nav-slider')

const navlinks = document.querySelector('.nav-links')

const socailMedia = document.querySelector('.social-media')

const nextArrow = document.querySelector('.next-arrow')

const navDots = document.querySelectorAll('.nav-dots a')

const aboutSection = $('.about-wrapper');


const tl1 = new TimelineMax();
const tl2 = new TimelineMax({paused: true, reversed: true});

tl1
    .to(doc, .3, {scrollTop: 0})
    .fromTo(
        slider,
        1,
        { width: '0'},
        { width: '100%', ease: Power2.easeInOut}
    )
    .fromTo(
        hero,
        .8,
        {height: '0%'},
        {height: '80%', ease: Power2.easeInOut}
    )
    .fromTo(
        logo,
        .5,
        {opacity: '0'},
        {opacity: '1',
        ease: Power2.easeInOut} 
    )
    .fromTo(
        headline,
        .5,
        {opacity: '0'},
        {opacity: '1',
        ease: Power2.easeInOut},
        "-=0.5" 
    )
    .fromTo(
        hamburger1,
        .1,
        {width: '0', border: '0'},
        {width: '36px', border: '1px solid white',
        ease: Power2.easeInOut, clearProps: "width, border"}
    )
    .fromTo(
        hamburger2,
        .2,
        {width: '0', border: '0'},
        {width: '26px', border: '1px solid white',
        ease: Power2.easeInOut, clearProps: "width, border"}
    )
    .fromTo(
        hamburger3,
        .2,
        {width: '0', border: '0'},
        {width: '20px', border: '1px solid white',
        ease: Power2.easeInOut, clearProps: "width, border"}
    )
    .fromTo(
        nextArrow.children[0],
        .3,
        {height: '0'},
        {height: '18px',
        ease: Power2.easeInOut, clearProps: "height"}
    )
    .fromTo(
        nextArrow.children[1],
        .3,
        {height: '0'},
        {height: '18px',
        ease: Power2.easeInOut, clearProps: "height"}
    ).fromTo(
        navDots[0],
        .05,
        {opacity: 0},
        {opacity: 1,
        ease: Power2.easeInOut, clearProps: "opacity"}
    ).fromTo(
        navDots[1],
        .05,
        {opacity: 0},
        {opacity: 1,
        ease: Power2.easeInOut, clearProps: "opacity"}
    ).fromTo(
        navDots[2],
        .05,
        {opacity: 0},
        {opacity: 1,
        ease: Power2.easeInOut, clearProps: "opacity"}
    ).fromTo(
        navDots[3],
        .05,
        {opacity: 0},
        {opacity: 1,
        ease: Power2.easeInOut, clearProps: "opacity"}
    );


    tl2.fromTo(
            navslider,
            0,
            {display: "none"},
            {display: "flex"}
        ).fromTo(
            navslider,
            0.5,
            {right: "-30%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[0],
            0.2,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[1],
            0.15,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[2],
            0.15,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[3],
            0.15,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            socailMedia,
            0.3,
            {bottom: "-100%"},
            {bottom: "0"}
        );

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    tl2.reversed() ? tl2.play() : tl2.reverse();

    // Essential way
    //
    // if (!hamburger.classList.contains("active")){
    //     hamburger.classList.add("active");
    //     tl2.play()
    // }
    // else
    // {
    //     hamburger.classList.remove("active");
    //     tl2.reverse();
    // }
});

navlinks.addEventListener("click", function(){
    tl2.reverse();
})


$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollbarLocation>200 ? nextArrow.style.opacity = "0" : nextArrow.style.opacity = "1"
});

//Smooth scrolling and nav-dots swithcing
$(document).ready(function () {
    var scrollLink = $('.scroll');

    scrollLink.on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function () {
        var scrollLink = $('.scroll'); 
        
    
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
    
            var sectionOffset = $(this.hash).offset().top - 340;
    
            // if ($(window).height() >= 850 && sectionOffset > 1900)
            //     sectionOffset = $(this.hash).offset().top - 700;
            // if ($(window).height() <= 850 && sectionOffset > 1200)
            //     sectionOffset = $(this.hash).offset().top - 550;
            // if ($(window).height() >= 100 && sectionOffset > 2600)
            //     sectionOffset = $(this.hash).offset().top - 1000;

            if (sectionOffset <= scrollbarLocation) {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
        })
    });
});

