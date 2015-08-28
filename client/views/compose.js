/*
 ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗██╔════╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║███████╗█████╗
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║╚════██║██╔══╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝███████║███████╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚══════╝╚══════╝
*/

Template.compose.helpers({
    html: function() {
        return Session.get('html');
    }
});

Template.compose.events({
    'click .send': function(e) {
        e.preventDefault();

        var to = $('[name=to]').val(),
            subject = $('[name=subject]').val(),
            text = $('#html').html();

        Meteor.call('sendEmail', to, '', subject, text, function(err) {
            if(err) {
                Materialize.toast(err, 4000);
            } else {
                Materialize.toast('Email sent !', 4000);
                // reset form and Session html
                $('form').get(0).reset();
                Session.set('html', '');
            }
        });
    }
});

/*
███████╗██████╗ ██╗████████╗ ██████╗ ██████╗
██╔════╝██╔══██╗██║╚══██╔══╝██╔═══██╗██╔══██╗
█████╗  ██║  ██║██║   ██║   ██║   ██║██████╔╝
██╔══╝  ██║  ██║██║   ██║   ██║   ██║██╔══██╗
███████╗██████╔╝██║   ██║   ╚██████╔╝██║  ██║
╚══════╝╚═════╝ ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
*/

Template.editor.events({
    'keyup #editor': function(e) {
        var md = $('[name=mdData]').val();
        Session.set('html', parseMarkdown(md));
    }
});

Template.editor.onCreated(function() {
    Session.set('html', '');
});
