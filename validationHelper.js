const constraints = {
    'first-name': { // These should match the name attributes of your form inputs
        presence: { allowEmpty: false },
        length: {
            minimum: 2
        }
    },
    'last-name': {
        presence: { allowEmpty: false },
        length: {
            minimum: 2
        }
    },
    email: {
        presence: { allowEmpty: false },
        email: true
    },
    inquiry: {
        presence: { allowEmpty: false },
        length: {
            minimum: 5
        }
    },
    tel: { // This is optional, if you want to validate the phone number, add your constraints
        presence: { allowEmpty: true },
        // It's optional, so we allow empty
        // Additional phone constraints can go here if needed
    }
};

const form = document.getElementById('contactForm'); // Use the correct ID
form.addEventListener('submit', function (event) {
    const formValues = {
        'first-name': form.elements['first-name'].value,
        'last-name': form.elements['last-name'].value,
        email: form.elements.email.value,
        inquiry: form.elements.inquiry.value,
        tel: form.elements.tel.value // Optional, include if you're validating
    };

    const errors = validate(formValues, constraints);
    if (errors) {
        event.preventDefault();
        // This is a basic way to display errors, you might want to customize it
        let errorMessages = '';
        for (let field in errors) {
            errorMessages += field + ': ' + errors[field] + '\n';
        }
        alert(errorMessages);
    }
}, false);