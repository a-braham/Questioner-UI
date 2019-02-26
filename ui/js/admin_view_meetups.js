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
                    meet += `<tr class="trow">
                                <td class="tbody">${JSON.stringify(meetup[0]).toString().replace(/"/g, "")}</td>
                                <td class="tbody">${JSON.stringify(meetup[1]).toString().replace(/"/g, "")}</td>
                                <td class="tbody">
                                    <ul class="ul-controls">
                                        </li>
                                        <li class="li-meetup-buttons"><button class="edt" id="edit${JSON.stringify(meetup[0])}"><img src="../img/edit.png"> Edit</button>
                                        <li class="li-meetup-buttons"><button class="del" id="delete${JSON.stringify(meetup[0])}"><img src="../img/delete.png"> Delete</button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>`
                });
                document.getElementById('tbody').innerHTML = meet
                data.data.forEach(meetup => {
                    // let url_id = document.getElementById(JSON.stringify(meetup[0])).id
                    // var url = "../ui/meetup.html?meet=" + encodeURIComponent(url_id)
                    // document.getElementById(JSON.stringify(meetup[0])).addEventListener("click", meetup_redirect)
                    document.getElementById('delete' + JSON.stringify(meetup[0])).addEventListener("click", delete_meetup)
                    // function meetup_redirect() {
                    //     window.location.href = url
                    // }
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