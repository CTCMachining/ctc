console.log("validation.js is running");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const form = document.getElementById('contactForm'); // Replace with your form's ID
    if (form) {
        console.log("Form found");

        form.addEventListener('submit', function(event) {
            let isValid = true;

            // Email Validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');

            // Add more validations here as needed

            // Prevent form submission if validation fails
            if (!isValid) {
                event.preventDefault();
                console.log('Form submission prevented due to validation failure.');
            }
        });
    }
});
