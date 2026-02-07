document.addEventListener('DOMContentLoaded', () => {
    console.log("Global.js loaded and DOM is ready.");

    /* --- 1. SELECTION --- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    /* --- 2. VALIDATION (CS Major sanity check) --- */
    if (!hamburger || !navMenu) {
        console.error("Critical Error: Hamburger or Nav elements not found. Check your IDs/Classes.");
        return;
    }

    /* --- 3. HAMBURGER TOGGLE --- */
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the button (for the X animation)
        hamburger.classList.toggle('active');
        // Toggle the 'active' class on the menu (to slide it in/out)
        navMenu.classList.toggle('active');
    });

    /* --- 4. CLOSE MENU ON LINK CLICK --- */
    // This improves UX so the menu doesn't stay open after navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* --- 5. SCROLL EFFECT --- */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});