import {meetup} from './helper'
window.onload = function () {
    const formData = document.getElementById('formData');
    formData.addEventListener('submit', create_meetup);
}
function create_meetup(event) {
    /*
    Function to perform creation of meetup
    */
    event.preventDefault();

    let topic = document.getElementById('topic').value;
    let location = document.getElementById('location').value;
    let happeningOn = document.getElementById('happeningOn').value;
    let description = document.getElementById('description').value;

    fetch(meetup, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            topic, location, happeningOn, description
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 201){
                window.location.href = "../meetups.html";
            }
            else{
                console.log(localStorage.getItem('token'))
                window.alert(data.message);
            }
        }))
}
