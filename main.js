$(document).ready(function() {
  $form = $("#mess-form");
  $form.submit(function(event) {
    event.preventDefault();
    $message = $("#message");
    const raw = $message.val();
    const escaped = $("<div />").text(raw).html();

    const $plain = $('<h1 class="plain-words">' + escaped + '</h1>');
    $message.val('');
    $('#form-container').hide();
    $('#words-container').html($plain);
    $plain.removeClass('plain-words');
    $plain.addClass('anim-words');
    $('body').addClass('anim-body');
  });
});
