window.onload = function () {
    const formData = document.getElementById('formData');
    formData.addEventListener('submit', create_question);
}
function create_question(event) {
    /*
    Function to perform creation of question
    */
    event.preventDefault();

    var page_URL = document.URL;
    var split_url = page_URL.split('/')
    var last_part = split_url[split_url.length-1]
    var split_last = last_part.split('=')

    var mid = split_last[split_last.length-1]
    let title = document.getElementById('title').value;
    let body = document.getElementById('description').value;

    const prefix = 'http://127.0.0.1:5000/api/v2';
    const url = prefix + '/meetup/' + mid + '/question/';
    console.log(url)
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            title, body
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 201){
                var url = "./view_question.html?meet=" + encodeURIComponent(mid)
                window.location.href = url;
            }
            else{
                console.log(localStorage.getItem('token'))
                window.alert(data.message);
            }
        }))
}
