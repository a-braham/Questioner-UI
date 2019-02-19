import { meetups } from './helper.js'
viewMeetups()
function truncate(string, words) {
    return string.split(" ").splice(0, words).join(" ");
}
function viewMeetups() {
    /*
    Function to collect meetups
    */

    fetch(meetups, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                let meet = new String();
                data.data.forEach(meetup => {
                    meet += `<div class="column">
                                <div class="card">
                                    <h4 class="q-h4"><a class="h-link" href="">${JSON.stringify(meetup[1]).toString().replace(/"/g, "")}</a></h4>
                                    <p id="more">${truncate(JSON.stringify(meetup[2]).toString().replace(/"/g, ""), 25)} <a class="url-link" href="#" id="${JSON.stringify(meetup[0])}"> ..more</a></p>
                                    <button class="btn edit" id="edit${JSON.stringify(meetup[0])}">Edit</button>
                                    <!-- <button class="btn delete" id="delete${JSON.stringify(meetup[0])}">Delete</button> -->
                                </div>
                            </div>`
                });
                document.getElementById('meetups').innerHTML = meet
                data.data.forEach(meetup => {
                    let url_id = document.getElementById(JSON.stringify(meetup[0])).id
                    var url = "../ui/meetup.html?meet=" + encodeURIComponent(url_id)
                    document.getElementById(JSON.stringify(meetup[0])).addEventListener("click", meetup_redirect)
                    document.getElementById('delete' + JSON.stringify(meetup[0])).addEventListener("click", delete_meetup)
                    function meetup_redirect() {
                        window.location.href = url
                    }
                    function delete_meetup(event) {

                        event.preventDefault();

                        let mid = JSON.stringify(meetup[0])

                        const prefix = 'https://questioner-system.herokuapp.com/api/v2';
                        const url = prefix + '/meetups/' + mid + '/delete/';

                        fetch(url, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': localStorage.getItem('token')
                            }
                        })
                            .then((response) => response.json())
                            .then((data => {
                                if (data.status === 201) {
                                    window.alert(data.message)
                                    window.location = window.location
                                }
                                else {
                                    window.alert(data.message);
                                }
                            }))
                    }
                });
            }
            else {
                window.alert(data.message);
            }
        }))
}