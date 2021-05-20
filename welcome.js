/*
    Polls status of select item, sets the display of the selected option
    to 'block' and then hides itself.
*/
function engage_selection() {
    const selection = document.getElementById('login_selection').value;
    const button = document.getElementById('go_button');
    var sbox = document.getElementById('selection_box');

    if ('1'.localeCompare(selection) == 0) {
        sbox.style.display = 'none';
        document.getElementById('login_modal').style.display = 'block';
    } else if ('2'.localeCompare(selection) == 0) {
        sbox.style.display = 'none';
        document.getElementById('signup_modal').style.display = 'block';
    }
}
document.getElementById('go_button').addEventListener('click', engage_selection);


/*
    Returns user to default login screen with select item. Hides all elements
    outside of the default selection box
*/
function go_back() {
    document.getElementById('selection_box').style.display = 'block';
    document.getElementById('login_modal').style.display = 'none';
    document.getElementById('signup_modal').style.display = 'none';
    document.getElementById('error_prompt').style.display = 'none';
}
document.getElementById('login_back_button').addEventListener('click', go_back)
document.getElementById('signup_back_button').addEventListener('click', go_back)

/*
    email verification resolved here
*/
function verify_email(email) {
    return /^[^@]+@[^@]+\.[^@]+$/.test(email);
}

/*
    Displays an error status above section according to what error was thrown
*/
function welcome_error(err) {
        var error_prompt = document.getElementById('error_prompt');
        console.log(err);
        error_prompt.innerHTML = err;
        error_prompt.style.display = 'block';
}


/*
    Takes email, verifies that it is valid
        (Would also compare to what is already registered, but local storage can only contain
            a single instance of 'username' or 'password')
    then adds the email to "username" key in local storage, and then verifies that both passwords
    entered match, and adds it to the "password" key in local storage.

    If the email is not valid or the passwords don't match, an exception is thrown, which sends the
    error to the welcome_error function
*/
function signup() {
    try {
        const email = document.getElementById('signup_email').value;
        if (verify_email(email)) {
            localStorage.setItem("email", email);
        } else {
            throw "Invalid Email";
        }

        const password = document.getElementById('signup_password').value;
        const vpass = document.getElementById('signup_vpass').value;

        if (password == vpass) {
            localStorage.setItem("password", password);
        } else {
            throw "Passwords do not match!";
        }
        success();
    } catch (err) {
        welcome_error(err);
    }
}
document.getElementById('signup_button').addEventListener('click', signup);

function login() {
    try {
        if (document.getElementById('login_email').value != localStorage.getItem('email')) {
            throw "Invalid Email!";
        } else if (document.getElementById('login_password').value != localStorage.getItem('password')) {
            throw "Invalid Password";
        } else {
            success();
        }
    } catch (err) {
        welcome_error(err);
    }
}
document.getElementById('login_button').addEventListener('click', login);

/*
    simple alert to inform user that information is correct and
    has a button to continue into the app
*/
function success() {
    document.getElementById('selection_box').style.display = 'none';
    document.getElementById('login_modal').style.display = 'none';
    document.getElementById('signup_modal').style.display = 'none';
    document.getElementById('error_prompt').style.display = 'none';

    document.getElementById('successful_entry').style.display = 'block';
}

function goToNotationStation() {
    window.location = "notationStation/index.html"
}
document.getElementById('continue').addEventListener('click', goToNotationStation);
document.getElementById('nsback').addEventListener('click', goToNotationStation);