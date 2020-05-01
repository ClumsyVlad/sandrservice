<?php 
header('Access-Control-Allow-Origin: *');

$method = $_SERVER['REQUEST_METHOD'];

$c = true;

$site_name = trim($_POST["site_name"]);
$recipient_email  = trim($_POST["recipient_email"]);
$form_subject = trim($_POST["form_subject"]);

foreach ( $_POST as $key => $value ) {
  if ( is_array($value) ) {
    $value = implode(", ", $value);
  }
  if ( $value != "" && $key != "site_name" && $key != "recipient_email" && $key != "form_subject" ) {
    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e2dddd 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e2dddd 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($site_name).' <'.$recipient_email.'>' . PHP_EOL .
'Reply-To: '.$recipient_email.'' . PHP_EOL;

mail($recipient_email, adopt($form_subject), $message, $headers );