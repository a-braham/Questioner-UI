viewQuestion()
function truncate(string, words) {
    return string.split(" ").splice(0, words).join(" ");
}
function viewQuestion() {
    /*
    Function to collect one Question
    */

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length - 1]
    var split_last = last_part.split('=')
    var qid = split_last[split_last.length - 1]

    const prefix = 'http://127.0.0.1:5000/api/v2';
    const url = prefix + '/questions/' + qid;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                    document.getElementById('title').innerHTML = JSON.stringify(data.data[1]).toString().replace(/"/g, "");
                    document.getElementById('description').innerHTML = JSON.stringify(data.data[2]).toString().replace(/"/g, "");
                    document.getElementById('votes').innerHTML = JSON.stringify(data.data[6]).toString().replace(/"/g, "");
                    document.getElementById('upvote').addEventListener("click", upvote)
                    document.getElementById('downvote').addEventListener("click", downvote)
            }
            else {
                window.alert(data.message);
            }
        }))
}

function upvote() {
    /*
    Function to collect one Question
    */

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length - 1]
    var split_last = last_part.split('=')
    var qid = split_last[split_last.length - 1]

    const prefix = 'http://127.0.0.1:5000/api/v2';
    const url = prefix + '/questions/' + qid + '/upvote/';

    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                window.location = window.location
            }
            else {
                window.alert(data.message);
            }
        }))
}

function downvote() {
    /*
    Function to collect one Question
    */

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length - 1]
    var split_last = last_part.split('=')
    var qid = split_last[split_last.length - 1]

    const prefix = 'http://127.0.0.1:5000/api/v2';
    const url = prefix + '/questions/' + qid + '/downvote/';

    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                window.location = window.location
            }
            else {
                window.alert(data.message);
            }
        }))
}

window.onload = function () {
    const formData = document.getElementById('formData');
    formData.addEventListener('submit', create_comment);
}
function create_comment(event) {
    /*
    Function to create comment based on particular Question
    */

   event.preventDefault();

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length - 1]
    var split_last = last_part.split('=')
    var qid = split_last[split_last.length - 1]

    const prefix = 'http://127.0.0.1:5000/api/v2';
    const url = prefix + '/questions/' + qid + '/comment/';

    let comment = document.getElementById('com').value;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            comment
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

viewComments()
function viewComments() {
    /*
    Function to collect questions specific to a meetup
    */

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length - 1]
    var split_last = last_part.split('=')
    var mid = split_last[split_last.length - 1]

    const prefix = 'http://127.0.0.1:5000/api/v2';
    const url = prefix + '/questions/' + mid + '/comments/';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                let comment_ = new String();
                data.data.forEach(comments => {
                    comment_ += `<div class="item">
                                <p id="comment">${JSON.stringify(comments[3]).toString().replace(/"/g, "")}</p>
                                <ul>
                                    <li class="user-item">
                                        <p class="user">Commented
                                            2hrs ago<a href="#" class="url-link"> By Grean</a></p>
                                    </li>
                                </ul>
                            </div>`
                });
                document.getElementById('allcomments').innerHTML = comment_
                // data.data.forEach(comments => {
                //     let url_id = document.getElementById(JSON.stringify(comments[0])).id
                //     var url = "../ui/comment.html?question=" + encodeURIComponent(url_id)
                //     document.getElementById(JSON.stringify(questions[0])).addEventListener("click", question_redirect)
                //     function question_redirect() {
                //         window.location.href = url
                //     }
                // });
            }
            else {
                window.alert(data.message);
            }
        }))
}