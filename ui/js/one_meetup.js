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
            }
            else {
                window.alert(data.message);
            }
        }))
}


function Rsvp() {
    /*
    Function to collect user
    */

    fetch(url, {
        method: '',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                    
            }
            else {
                window.alert(data.message);
            }
        }))
}
