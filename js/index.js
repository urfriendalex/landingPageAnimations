const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('#hamburger')

const hamburger1 = document.querySelector('#hamburger span:nth-of-type(1)')
const hamburger2 = document.querySelector('#hamburger span:nth-of-type(2)')
const hamburger3 = document.querySelector('#hamburger span:nth-of-type(3)')

const headline = document.querySelector('.headline')

const tl = new TimelineMax();

tl.fromTo(
    slider,
    1,
    { width: '0'},
    { width: '100%', ease: Power2.easeInOut}
    )
    .fromTo(
    hero,
    1.2,
    {height: '0%'},
    {height: '80%', ease: Power2.easeInOut}
    )
    .fromTo(
        hero,
        1,
        {wdth: '100%'},
        {width: '70%',
        ease: Power2.easeInOut} 
    )
    .fromTo(
        logo,
        1,
        {opacity: '0'},
        {opacity: '1',
        ease: Power2.easeInOut} 
    )
    .fromTo(
        headline,
        1,
        {opacity: '0'},
        {opacity: '1',
        ease: Power2.easeInOut},
        "-=1" 
    )
    .fromTo(
        hamburger1,
        .3,
        {width: '0'},
        {width: '36px',
        ease: Power2.easeInOut} 
    )
    .fromTo(
        hamburger2,
        .3,
        {width: '0'},
        {width: '26px',
        ease: Power2.easeInOut} 
    )
    .fromTo(
        hamburger3,
        .3,
        {width: '0'},
        {width: '20px',
        ease: Power2.easeInOut} 
    );
    


function test(){
    console.log('test');
}