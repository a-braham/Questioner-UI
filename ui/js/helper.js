const prefix = 'http://127.0.0.1:5000/api/v2';

const signup = prefix + '/auth/signup';
const login = prefix + '/auth/login';
const meetup = prefix + '/meetups';
const meetups = prefix + '/meetups/upcoming';
const prof = prefix + '/profile';
export{
    login, signup, meetup, meetups, prof
}