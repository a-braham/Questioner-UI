oneMeetup()
function oneMeetup() {
    /*
    Function to collect meetups
    */

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length-1]
    var split_last = last_part.split('=')
    var mid = split_last[split_last.length-1]

   const prefix = 'https://questioner-system.herokuapp.com/api/v2';
   const url = prefix + '/meetups/' + mid;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                    document.getElementById('meetup_head').innerHTML = JSON.stringify(data.data[1]).toString().replace(/"/g, "");
                    document.getElementById('meetup_body').innerHTML = JSON.stringify(data.data[2]).toString().replace(/"/g, "");
                    document.getElementById('venue').innerHTML = "Venue: " + JSON.stringify(data.data[3]).toString().replace(/"/g, "");
                    document.getElementById('date').innerHTML = "Date: " + JSON.stringify(data.data[4]).toString().replace(/"/g, "");
                    document.getElementById('yes').addEventListener("click", yesRsvp);
                    document.getElementById('maybe').addEventListener("click", maybeRsvp);
                    document.getElementById('no').addEventListener("click", noRsvp);
            }
            else {
                window.alert(data.message);
            }
        }))
}

function yesRsvp(event) {
    /*
    Function to book yes rsvp
    */

   event.preventDefault();

   var page_URL = document.URL;
   var split_url = page_URL.split('/')
   var last_part = split_url[split_url.length-1]
   var split_last = last_part.split('=')

   var mid = split_last[split_last.length-1]

   const prefix = 'http://127.0.0.1:5000/api/v2';
   const url = prefix + '/meetups/' + mid + '/rsvps/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            'rsvp': "yes"
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 201) {
                window.alert(data.message);
                window.location = window.location
            }
            else {
                window.alert(data.message);
            }
        }))
}

function maybeRsvp(event) {
    /*
    Function to book maybe rsvp
    */

   event.preventDefault();

   var page_URL = document.URL;
   var split_url = page_URL.split('/')
   var last_part = split_url[split_url.length-1]
   var split_last = last_part.split('=')

   var mid = split_last[split_last.length-1]

   const prefix = 'http://127.0.0.1:5000/api/v2';
   const url = prefix + '/meetups/' + mid + '/rsvps/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            'rsvp': "maybe"
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 201) {
                window.location = window.location
            }
            else {
                window.alert(data.message);
            }
        }))
}

function noRsvp(event) {
    /*
    Function to book no rsvp
    */

   event.preventDefault();

   var page_URL = document.URL;
   var split_url = page_URL.split('/')
   var last_part = split_url[split_url.length-1]
   var split_last = last_part.split('=')

   var mid = split_last[split_last.length-1]

   const prefix = 'http://127.0.0.1:5000/api/v2';
   const url = prefix + '/meetups/' + mid + '/rsvps/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            'rsvp': "no"
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 201) {
                window.location = window.location
            }
            else {
                window.alert(data.message);
            }
        }))
}

countRsvp()
function countRsvp() {
    /*
    Function to SHOW no. OF rsvpS
    */

   var page_URL = document.URL;
   var split_url = page_URL.split('/')
   var last_part = split_url[split_url.length-1]
   var split_last = last_part.split('=')

   var mid = split_last[split_last.length-1]

   const prefix = 'http://127.0.0.1:5000/api/v2';
   const url = prefix + '/meetups/' + mid + '/rsvps_count/';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                document.getElementById('count').innerHTML = data.data;
            }
            else {
                window.alert(data.message);
            }
        }))
}

