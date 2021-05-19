var buttonBox = document.querySelector('#button_box');
var loginButton = document.querySelector('#login_button');
var signupButton = document.querySelector('#signup_button');

/*
    Following event listeners are the first two
    visible buttons, once clicked removes themselves
    from display and presents the according
    login 'modal'
*/

loginButton.addEventListener(
    'click',
    () => {
        buttonBox.style.display = 'none';
        document.querySelector('#login_modal').style.display = 'flex';
    }
)

signupButton.addEventListener(
    'click',
    () => {
        buttonBox.style.display = 'none';
        document.querySelector('#signup_modal').style.display = 'flex';
    }
)

//used for signing in
var loginModalButton = document.querySelector('#login_modal_button');
loginModalButton.addEventListener('click', verifyEmail);


//used for signing up
var signupModalButton = document.querySelector('#signup_modal_button');
signupModalButton.addEventListener('click', signUp);

function verifyEmail(email) {
    /*
    console.log(new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$").test(email));
    return new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$").test(email);
    console.log(new RegExp("^\S+@\S+$").test(email))
    return new RegExp("^\S+@\S+$").test(email);

    var regex = new RegExp( "^\S+@\S+$");
    console.log(regex.test(String(email)));
    return regex.test(String(email));
    */

    /*none of the above work, don't know how to properly verfiy regex with javascript
    hardcoding true return in meantime
    */

    return true;

}


/*
    function runs after filling out the forms on the sing up modal
    verifyEmail hardcoded true due to not being able to make regex work

    the values are added to document.cookie after checking validity

    cookies do not carry over to next page

    plan was to compare login credentials on the cookie to those that were
    used during sign up.  Trying to figure out how cookies work
*/
function signUp() {
    var email = document.getElementById('signup_email').value;
    var password = document.getElementById('signup_password').value;
    var verify = document.getElementById('verify_password').value;
    try {
        if (verifyEmail(email)) {
            document.cookie += "email=" + email + ";";
            console.log(email + " valid!");
        } else {
            throw "Email is not valid!";
        }
        if (password == verify) {
            document.cookie += "password=" + password + ";";
            console.log(password);
        } else {
            throw "Passwords do not match!";
        }

        console.log(document.cookie);
        location.href = 'ns/note_box.html';
    } catch (err) {
        console.log(err);
        var notification = document.getElementById('field_error');
        notification.style.display = 'flex';
        notification.innerHTML = err;
    }
}


/*
    adds event listener to the back button in case user
    want's to return back to the first prompt
*/

var loginBack = document.querySelector('#login_back');
loginBack.addEventListener('click', back_to_box);
var signupBack = document.querySelector('#signup_back');
signupBack.addEventListener('click', back_to_box);

/*
    sets the first buttons to visible while hiding the modal buttons
*/
function back_to_box() {
    buttonBox.style.display = 'flex';
    document.querySelector('#signup_modal').style.display = 'none';
    document.querySelector('#login_modal').style.display = 'none';
}