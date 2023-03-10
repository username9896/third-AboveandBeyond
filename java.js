const form = document.querySelector('form');
const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (username.value === 'Vicky' && password.value === 'Vicky111') {
        alert('Login successful');
        window.location.href = "details.html";
        return;
    }
    else if (username.value === 'bob' && password.value === 'bob111') {
        alert('Login successful');
        window.location.href = "details2.html";
        return;
    }
    else if (username.value === 'mary' && password.value === 'mary111') {
        alert('Login successful');
        window.location.href = "details3.html";
        return;
    }
    else if (username.value === '' || password.value === '') {
        alert('Please enter both username and password');
        return;
    }
    else
    {
        alert('Login Failed');
        return;
    }
});