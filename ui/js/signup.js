// const formData = document.getElementById('formData').addEventListener('submit', signUpUser);
const signUP = document.getElementById('signUP')

function signUpUser(event){
    /*
    Function to perform user signup
    */
   event.preventDefault();

   fetch('https://questioner-system.herokuapp.com/api/v2/signup', {
       method: 'POST',
       body: JSON.stringify({
            "firstname": document.getElementById('firstname').value,
            "lastname": document.getElementById('lastname').value,
            "othername": document.getElementById('othername').value,
            "email": document.getElementById('email').value,
            "phone": document.getElementById('phone').value,
            "username": document.getElementById('username').value,
            "password": document.getElementById('password').value
       }),
       headers: {
        'Content-Type': 'application/json'
      }
   })
   .then(res => res.json())
   .then((data => console.log('Success:', JSON.stringify(data))))
   .catch(error => console.log('Error', error))
}
signUP.addEventListener('click', signUpUser)