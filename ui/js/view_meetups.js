import { meetups } from './helper.js'
viewMeetups()
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
                                <h4 class="q-h4">${JSON.stringify(meetup[1]).toString().replace(/"/g, "")}</h4>
                                <p>${JSON.stringify(meetup[2]).toString().replace(/"/g, "")}</p>
                                <div id="myModal" class="modal">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <span class="close">&times;</span>
                                            <h2>Post Question</h2>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <label class="form-label">Title</label><br>
                                                <input class="form-input" type="text"
                                                    required><br>
                                                <label class="form-label">Description</label><br>
                                                <textarea class="textarea" 
                                                    rows="10" cols="70" name="comment" form="usrform"></textarea><br><br>
                                                <button class="form-btn">Post</button><br>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li class="user-item">
                                        <a id="myBtn" class="url-link form-btn" type="submit" href="#">Ask Question</a>
                                        <p class="user">Posted
                                            2hrs ago<a href="#" class="url-link link"> By Admin</a></p>
                                    </li>
                                </ul>
                            </div>`
                    document.getElementById('meetups').innerHTML = meet
                });
                var modal = document.getElementById('myModal');
                var btn = document.getElementById("myBtn");
                var span = document.getElementsByClassName("close")[0];
                btn.onclick = function () {
                    modal.style.display = "block";
                }
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
            else {
                window.alert(data.message);
            }
        }))
}
