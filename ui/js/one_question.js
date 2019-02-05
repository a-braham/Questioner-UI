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
            }
            else {
                window.alert(data.message);
            }
        }))
}
