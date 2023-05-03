let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// * //

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('heder nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
             navLinks.forEach(links => {
                links.classList.remove('aactive');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // * //
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};
    // * //
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-contet, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container .portfolio-box, .contaact form ',  { origin: 'bottom' });
ScrollReveal().reveal('.home-contet h1, .about-img, navbar',  { origin: 'left' });
ScrollReveal().reveal('.home-contet p, .about-contet ',  { origin: 'right' });

// typed js //
// const typed = new typed('.multiple-text',{
//     strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

