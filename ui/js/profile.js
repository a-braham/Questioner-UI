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
               document.getElementById('user').innerHTML = data.data[4].toString().replace(/"/g, "")
            }
            else {
                window.location = "../admin/login.html";
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
                window.location.href = './profile.html';
            }
            else {
                window.alert(data.message);
            }
        }))
}

function createProfileData() {
    /*
    Function to create user profile data
    */

    fetch(prof, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                document.getElementById('fullname').innerHTML = (data.data[1].toString().replace(/"/g, "") + " " + data.data[2].toString().replace(/"/g, ""))
            }
            else {
                window.alert(data.message);
            }
        }))
}

profiledata()
function profiledata() {
    /*
    Function to collect user and load profile data
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
                document.getElementById('fullname').innerHTML = (data.data[1].toString().replace(/"/g, "") + " " + data.data[2].toString().replace(/"/g, ""))
            }
            else {
                window.alert(data.message);
            }
        }))
}
