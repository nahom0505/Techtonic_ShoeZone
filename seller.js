// Get the form element
const form = document.querySelector('.cat');

// Get the input elements
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="phone"]');

// Get the button element
const submitButton = document.getElementById('form_button');

// Function to handle form submission
submitButton.addEventListener('click', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the values from input fields
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // Display the values in an alert
    alert(`Name: ${nameValue}\nEmail: ${emailValue}\nPassword: ${passwordValue}`);
});

