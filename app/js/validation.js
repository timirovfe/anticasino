
document.addEventListener('DOMContentLoaded', () => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const EmailInput = document.querySelector('input[type=email]');

    EmailInput.addEventListener('input', () => {
        if (isEmailValid(EmailInput.value)) {
            EmailInput.style.borderColor = 'green';
        } else {
            EmailInput.style.borderColor = 'red';
        }
    });

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }
})