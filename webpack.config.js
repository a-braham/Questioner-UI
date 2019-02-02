const path=require('path')

module.exports={
    entry:{
       index: "./ui/js/index.js",
       signup: "./ui/js/signup.js",
       login: "./ui/js/login.js",
       meetup: "./ui/js/create_meetup.js",
       meetups: "./ui/js/view_meetups.js"
    },
    mode: 'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[name].js'
    }
}