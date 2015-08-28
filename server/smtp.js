Meteor.startup(function(){
    process.env.MAIL_URL = 'smtp://login:password@smtp.server.com:port';
});
