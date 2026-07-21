document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        // Open/Close when clicking the 3 lines
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close the menu when the user starts scrolling
        window.addEventListener('scroll', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }
});