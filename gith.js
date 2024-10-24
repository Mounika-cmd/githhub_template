document.getElementById('signInForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;
    alert(`Signed in as ${username}`);
});

document.getElementById('signUpForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    alert(`Account created for ${username} with email ${email}`);
});
