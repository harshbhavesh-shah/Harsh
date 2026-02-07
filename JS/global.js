document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const body = document.body;

    if (!hamburger || !navMenu) return;

    // HAMBURGER CLICK
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Scroll Lock
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // LINK CLICK
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // SCROLL LISTENER
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            body.classList.add('scrolled-mode'); // Helper for desktop menu
        } else {
            header.classList.remove('scrolled');
            body.classList.remove('scrolled-mode');
        }
    });
});