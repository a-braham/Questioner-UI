import { questions } from './helper.js'
viewQuestions()
function truncate(string, words) {
    return string.split(" ").splice(0, words).join(" ");
}
function viewQuestions() {
    /*
    Function to collect questions specific to a meetup
    */

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length - 1]
    var split_last = last_part.split('=')
    var mid = split_last[split_last.length - 1]

    const prefix = 'https://questioner-system.herokuapp.com/api/v2';
    const url = prefix + '/meetup/' + mid + '/questions/';

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200) {
                let question = new String();
                data.data.forEach(questions => {
                    question += `<div class="item">
                                <h4 class="q-h4">${JSON.stringify(questions[1]).toString().replace(/"/g, "")}</h4>
                                <p>${truncate(JSON.stringify(questions[2]).toString().replace(/"/g, ""), 28)} <a class="url-link" href="#" id="${JSON.stringify(questions[0])}"> ..more</a></p>
                                <ul>
                                    <li class="user-item">
                                        <button class="btn-votes"><img src="img/up.png"></button>
                                        <button class="btn-votes" id="votes"><p>0</p></button>
                                        <button class="btn-votes"><img src="img/down.png"></button>
                                        <a id="comment-btn" class="url-link form-btn" type="submit" href="comment.html">Comment</a>
                                        <p class="user">Asked
                                            2hrs ago<a href="#" class="url-link"> By Abraham</a></p>
                                    </li>
                                </ul>
                            </div>`
                });
                document.getElementById('questions').innerHTML = question
                data.data.forEach(questions => {
                    let url_id = document.getElementById(JSON.stringify(questions[0])).id
                    var url = "../ui/comment.html?question=" + encodeURIComponent(url_id)
                    document.getElementById(JSON.stringify(questions[0])).addEventListener("click", question_redirect)
                    function question_redirect() {
                        window.location.href = url
                    }
                });
            }
            else {
                window.alert(data.message);
            }
        }))
}