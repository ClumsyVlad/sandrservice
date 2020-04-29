$(function() {
  document.getElementById('contact-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "contact.php");
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert('norm');
        // document.getElementsByClassName('.form-send-success').classList.add('.show-send-result');
        // console.log('Successful form submission.');
      } else {
        // document.getElementsByClassName('.form-send-failed').classList.add('.show-send-result');
        // console.log('Error submitting form.\nTry to refresh the page and send again or contact via the specified contact details.');
        alert('not norm');
        $('.form-send-failed').addClass('show-send-result');
        console.log('notnot');
      }
    }
    // http.onerror = function() {
    //   document.getElementsByClassName('.form-send-failed').classList.add('.show-send-result');
    //   console.log('Error submitting form.\nTry to refresh the page and send again or contact via the specified contact details.');
    // }
    http.send(new FormData(f));
  }, false);
});