import { meetups } from './helper.js'
viewMeetups()
function truncate(string, words){
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
                    meet += `<div class="item">
                                <h4 class="q-h4"><a class="h-link" href="">${JSON.stringify(meetup[1]).toString().replace(/"/g, "")}</a></h4>
                                <p>${truncate(JSON.stringify(meetup[2]).toString().replace(/"/g, ""), 28)} <a class="url-link" href=""> ..more</a></p>
                                
                                <ul>
                                    <li class="user-item">
                                        <p class="user">Posted
                                            2hrs ago<a href="#" class="url-link link"> By Admin</a></p>
                                    </li>
                                </ul>
                            </div>`
                    document.getElementById('meetups').innerHTML = meet
                });
            }
            else {
                window.alert(data.message);
            }
        }))
}
