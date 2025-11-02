// Menu Hamburger Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});



// Smooth scroll pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
/** Plugin ----------------------------------------------------------------- */
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//** Animation 1 : hero Section */
gsap.from('.hero-title', { //Animation logo
    duration: 1.5,
    y: -300,
    opacity: 0,
    ease: 'power1.out'
});

gsap.from('.hero-image',{ //Animarion image
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    delay: 0.3,
    ease: 'power1.out'
});

gsap.from('.hero-tagline',{ //Animarion texte
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: 'power1.out'
});

//** Animation 2 : Section collab */

gsap.from('.collab-img',{
    scrollTrigger:{
        trigger: '.collaboration',
        start: '-40%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: false,
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,   
    ease: 'power3.out'
})

//** Animation 3 : CD */

gsap.to('.cd',{
        scrollTrigger:{
        trigger: '.services',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        markers: false,
        id: 'cd-rotation'
    },
    rotation: 720,
    ease: 'none'
});

//** Animation 4 : Services */

gsap.from('.service-number', {
    scrollTrigger:{
        trigger: '.services-grid',
        start: 'top 60%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse',
        //markers: true,
        //id : 'services'
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.15,
    ease: 'power2.out'
});

gsap.from('.service-number', {
    scrollTrigger:{
        trigger: '.services-grid',
        start: 'top 65%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    scale: 0,
    raotation: 360,
    stagger: 0.15,
    ease: 'back.out(1.7)'
});