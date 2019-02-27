window.onload = function () {
    const logout = document.getElementById('logout');
    logout.addEventListener('click', user_logout);
}

function user_logout(event) {
    /*
    Function to perform logout user
    */
    event.preventDefault();


    localStorage.removeItem('token');

    window.location.href = "./login.html";
}