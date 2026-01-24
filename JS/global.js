const header = document.getElementById('main-header');

        // Listen for the scroll event
        window.addEventListener('scroll', () => {
            // Check if user has scrolled more than 50 pixels down
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
