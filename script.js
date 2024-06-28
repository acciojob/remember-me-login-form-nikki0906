//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('checkbox');
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');

    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'block';
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameField.value;
        const password = passwordField.value;
        const rememberMe = rememberMeCheckbox.checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    existingButton.addEventListener('click', () => {
        const username = localStorage.getItem('username');
        alert(`Logged in as ${username}`);
    });
});

