<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
header('Access-Control-Allow-Origin: *');
if (isset ($_POST['contact-form'])) {
  $to = "mazur097mazur@gmail.com"; // email which will take customer mail from page
  $from = "mazur097mazur@gmail.com"; // email from which mail will be sent to the corporate email 
  $subject = "Formularz kontaktowy wypełniony na *site.adress*".$_SERVER['HTTP_REFERER']; // from whic site mail by customer will be send
  $message = "Imię: ".$_POST['name'].
  "\nKontakty klienta: ".$_POST['tel'].
  "\nEmail klienta: ".$_POST['email'].
  "\nWiadomość od klienta: ".$_POST['message'].
  "\n\nWiadomość została wysłana z ".$_SERVER['HTTP_REFERER'];
}
?>
