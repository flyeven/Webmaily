# Webmaily
Webmaily - Sending email with markdown (built with Meteor)

Local installation :

First, you have to install the meteor framework. To do this, execute this command (Linux / Macos) :

`curl https://install.meteor.com | /bin/sh`

Then,clone webmaily to a folder on your computer

`git clone https://github.com/shadowRR/webmaily.git`

Go inside the newly created folder, and find the file server/smtp.js. There, replace the dummy MAIL_URL infos
with your own.
*(Ex with gmail: smtp://foobar:password@smtp.gmail.com:587)*

You'all also have to change (temporary) the 'from' options in the server/mail.js file inside the Email.send() function.

Then just launch the meteor server (locally) with: 
`meteor`

Wait for the server to launch, then go to:
`localhost:3000`

### Notes

- Everything is under development and by no means meant to be used in production. I'm just building it for fun, and also because i wanted a really simple markdown email editor for myself.
- It's also doesn't check much for error has of right now, assuming that you'll properly fill everything.

### Roadmap

- Adding a settings page to setup the MAIL_URL variables in a mongo collection,
- Possibility to handle multiple accounts,
- Keep the already sent email adresses to autocomplete on next use,
- Properly show the html instead of the default materialize.css which is sometimes weird,
- Send a full text version along the html one for compatibility.

### License

MIT


