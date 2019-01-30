window.onload = function () {
    const formData = document.getElementById('formData')
    formData.addEventListener('submit', loginUser);
}
function loginUser(event) {
    /*
    Function to perform user login
    */
    event.preventDefault();

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    fetch('http://127.0.0.1:5000/api/v2/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    })
        .then((response) => response.json())
        .then((data => {
            if (data.status === 200){
                localStorage.setItem('token', data.token)
                window.location.href = "../ui/index.html";
            }
            else{
                window.alert(data.message);
            }
        }))
}
