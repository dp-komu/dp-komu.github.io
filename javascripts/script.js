$(() => {

  var addMessage = (message) => {

    var date = message.date.toLocaleDateString() + ' '
      + message.date.toLocaleTimeString();

    $('#messages').append('' +
      '<tr>' +
        '<td>' + message.name + '</td>' +
        '<td>' + message.text + '</td>' +
        '<td>' + date + '</td>' +
      '</tr>');

  };

  var createMessage = () => {

    var text = $('input#message').val();
    var message = {
      name: 'レイ',
      text: text,
      date: new Date()
    };

    $('input#message').val('');
    return message;

  };

  var addParticipant = (name) => {
    var li = '<li class="list-group-item">'+name+'</li>';
    $('#participant').append(li);
  };

  var denxchan = {

    jump: () => {
      $("#denxchan")
        .animate({ bottom: '20px'}, 150, 'swing')
        .animate({ bottom: '0px' }, 150, 'swing');
    },

    shake: () => {
      $("#denxchan")
        .animate({ left: '-10px' }, 60, 'swing')
        .animate({ left: '10px' }, 120, 'swing')
        .animate({ left: '0px' }, 60, 'swing');
    }

  };

  $('button#submit').click(() => {
    var message = createMessage();
    denxchan.jump();
    addMessage(message);
  });

  $('input#message').keypress((e) => {
    if (e.which == 13) {
      var message = createMessage();
      denxchan.jump();
      addMessage(message);
    }
  });

  denxchan.shake();

});
