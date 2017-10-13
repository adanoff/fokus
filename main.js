function reset() {
  $('#words-container').hide();
  $('#form-container').show();
  $('#message').focus();
  $('body').removeClass('anim-body');
}

$(document).ready(function() {
  $('#message').focus();
  $form = $('#mess-form');
  $form.submit(function(event) {
    event.preventDefault();
    $message = $('#message');
    const raw = $message.val();
    const escaped = $('<div />').text(raw).html();

    const $plain = $('<h1 class="plain-words">' + escaped + '</h1>');
    $message.val('');
    $('#form-container').hide();
    $('#words-container').html($plain);
    $('#words-container').show();
    $plain.removeClass('plain-words');
    $plain.addClass('anim-words');
    $('body').addClass('anim-body');
  });

  $(document).keyup(function(event) {
    // 27 == ESC
    if (event.which == 27) {
      reset();
    }
  });

});
