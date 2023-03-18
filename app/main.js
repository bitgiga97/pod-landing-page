const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const errorMsg = document.getElementById('error-msg');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!isValidEmail(emailInput.value)) {
        errorMsg.innerHTML = 'Oops! Please check your email';
    } else {
        form.submit();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}