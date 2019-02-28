import {signup} from './helper'
window.onload = function () {
    const formData = document.getElementById('formData');
    formData.addEventListener('submit', signUpUser);
}
function signUpUser(event) {
    /*
    Function to perform user signup
    */
    event.preventDefault();

    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let othername = document.getElementById('othername').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch(signup, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname, lastname, othername, email, phoneNumber, username, password
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 201){
                window.location.href = "../ui/login.html";
                console.log('Success:', JSON.stringify(data));
            }
            else{
                window.alert(data.message);
            }
        }))
}

export default signUpUser;