import {login} from './helper.js'

window.onload = function () {
    const formData = document.getElementById('formData');
    formData.addEventListener('submit', loginUser);
}
function loginUser(event) {
    /*
    Function to perform user login
    */
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch(login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200){
                localStorage.setItem('token', data.token)
                window.location.href = "../admin/home.html";
            }
            else{
                window.alert(data.message);
            }
        }))
}
