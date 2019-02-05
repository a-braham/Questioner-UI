import {prof} from './helper'
profilename()
function profilename() {
    /*
    Function to collect logged in user
    */

    fetch(prof, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
               document.getElementById('signup').innerHTML = data.data[0].toString().replace(/"/g, "")
            }
            else {
                window.alert(data.message);
            }
        }))
}
window.onload = function () {
    const signup = document.getElementById('signup');
    signup.addEventListener('click', profile);
}
function profile() {
    /*
    Function to collect user and load profile page
    */

    fetch(prof, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                window.location.href = './profile.html'
            }
            else {
                window.alert(data.message);
            }
        }))
}
