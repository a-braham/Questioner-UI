const path=require('path')
// require("babel-polyfill");

module.exports={
    entry:{
    //    "babel-polyfill": "./ui/js",
       index: "./ui/js/index.js",
       signup: "./ui/js/signup.js",
       login: "./ui/js/login.js",
       admin_login: "./ui/js/admin_login.js",
       meetup: "./ui/js/create_meetup.js",
       meetups: "./ui/js/view_meetups.js",
       admin_meetups: "./ui/js/admin_view_meetups.js",
       one_meet: "./ui/js/one_meetup.js",
       profile: "./ui/js/profile.js",
       question: "./ui/js/create_question.js",
       questions: "./ui/js/view_questions.js",
       one_question: "./ui/js/one_question.js"
    },
    mode: 'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[name].js'
    }
}