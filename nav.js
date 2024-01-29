document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    let isScrolling = false;

    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!expanded));

        if (!expanded) {
            dropdownMenu.classList.add('transition', 'ease-out', 'duration-100', 'transform', 'opacity-100', 'scale-100');
            dropdownMenu.classList.remove('ease-in', 'duration-75', 'opacity-0', 'scale-95');
            isScrolling = false;
        } else {
            dropdownMenu.classList.add('transition', 'ease-in', 'duration-75', 'opacity-0', 'scale-95');
            dropdownMenu.classList.remove('ease-out', 'duration-100', 'opacity-100', 'scale-100');
        }
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            menuButton.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.remove('transition', 'ease-out', 'duration-100', 'opacity-100', 'scale-100');
            dropdownMenu.classList.add('ease-in', 'duration-75', 'opacity-0', 'scale-95');
        }
    });

    menuButton.setAttribute('aria-expanded', 'false');
    dropdownMenu.classList.add('ease-in', 'duration-75', 'opacity-0', 'scale-95');

    // Auto-scroll functionality
    const scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);

        const scrollPosition = section.offsetTop - document.querySelector('nav').offsetHeight + 70;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        // Close the mobile menu after clicking
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    };

    // Add click event listeners for menu items
    document.getElementById('about-us').addEventListener('click', function () {
        scrollToSection('about-us-section');
    });

    document.getElementById('services').addEventListener('click', function () {
        scrollToSection('our-services-section');
    });

    document.getElementById('contact-us').addEventListener('click', function () {
        scrollToSection('contact-form-section');
    });

    document.getElementById('about-us-mobile').addEventListener('click', function () {
        scrollToSection('about-us-section');
        // Close the dropdown
        menuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('transition', 'ease-out', 'duration-100', 'opacity-100', 'scale-100');
        dropdownMenu.classList.add('ease-in', 'duration-75', 'opacity-0', 'scale-95');
    });

    document.getElementById('services-mobile').addEventListener('click', function () {
        scrollToSection('our-services-section');
        // Close the dropdown
        menuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('transition', 'ease-out', 'duration-100', 'opacity-100', 'scale-100');
        dropdownMenu.classList.add('ease-in', 'duration-75', 'opacity-0', 'scale-95');
    });

    document.getElementById('contact-us-mobile').addEventListener('click', function () {
        scrollToSection('contact-form-section');
        // Close the dropdown
        menuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('transition', 'ease-out', 'duration-100', 'opacity-100', 'scale-100');
        dropdownMenu.classList.add('ease-in', 'duration-75', 'opacity-0', 'scale-95');
    });

    // Add scroll event listener to set the scrolling flag
    window.addEventListener('scroll', function () {
        isScrolling = true;
    });

    // Add scroll event listener to close the mobile menu
    window.addEventListener('scroll', function () {
        if (isScrolling) {
            // Close the mobile menu
            menuButton.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.remove('transition', 'ease-out', 'duration-100', 'opacity-100', 'scale-100');
            dropdownMenu.classList.add('ease-in', 'duration-75', 'opacity-0', 'scale-95');
            isScrolling = false; // Reset the scrolling flag
        }
    });
});
