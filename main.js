$(document).ready(function() {
  $form = $("#mess-form");
  $form.submit(function(event) {
    event.preventDefault();
    $message = $("#message");
    const raw = $message.val();
    const escaped = $("<div />").text(raw).html();
    const to_add = '<h1 class="main-words">' + escaped + '</h1>';

    $message.val('');
    $('#words-container').html(to_add);
    $('body').addClass('showing');
    $('#form-container').hide();
  });
});
