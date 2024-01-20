document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    // Set the initial state to closed
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;

    mobileMenuButton.addEventListener('click', function () {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

        // Toggle the aria-expanded attribute on the button
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

        // Toggle the hidden class on the mobile menu
        mobileMenu.hidden = !mobileMenu.hidden;

        // Add/Remove transition classes based on menu state
        if (mobileMenu.hidden) {
            mobileMenu.classList.remove('transition', 'ease-out', 'duration-100');
            mobileMenu.classList.add('transition', 'ease-in', 'duration-75');
        } else {
            mobileMenu.classList.remove('transition', 'ease-in', 'duration-75');
            mobileMenu.classList.add('transition', 'ease-out', 'duration-100');
        }
    });

    // Add transition effects
    mobileMenu.addEventListener('transitionend', function () {
        // This event is triggered when the transition is complete
        if (mobileMenu.hidden) {
            // If the menu is hidden, remove the transition class
            mobileMenu.classList.remove('transition', 'ease-out', 'duration-100');
        } else {
            // If the menu is visible, add the transition class
            mobileMenu.classList.add('transition', 'ease-out', 'duration-100');
        }
    });

    // Auto-scroll functionality
    const scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);

        const scrollPosition = section.offsetTop - document.querySelector('nav').offsetHeight + 70;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        // Close the mobile menu after clicking
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
    };

    // Add click event listeners for menu items
    document.getElementById('menu-who-we-are').addEventListener('click', function () {
        scrollToSection('about-us-section');
    });

    document.getElementById('menu-what-we-do').addEventListener('click', function () {
        scrollToSection('our-services-section');
    });

    document.getElementById('menu-contact-us').addEventListener('click', function () {
        scrollToSection('contactForm contact-form-section');
    });

    document.getElementById('menu-who-we-are-mobile').addEventListener('click', function () {
        scrollToSection('about-us-section');
    });

    document.getElementById('menu-what-we-do-mobile').addEventListener('click', function () {
        scrollToSection('our-services-section');
    });

    document.getElementById('menu-contact-us-mobile').addEventListener('click', function () {
        scrollToSection('contactForm contact-form-section');
    });

    // Add scroll event listener to close the mobile menu
    window.addEventListener('scroll', function () {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            // Close the mobile menu
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.hidden = true;
        }
    });
});
