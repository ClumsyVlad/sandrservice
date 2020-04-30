<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {
    $from = ("from.email@gmail.com");
    $name = trim($_POST["name"]); //name-ы с form, для каждого input
    $tel  = trim($_POST["tel"]); // 
    $email = trim($_POST["email"]);
    $letter = trim($_POST["letter"]);
} 


function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($name).' <'.$phone.'>' . PHP_EOL .
'Reply-To: '.$phone.'' . PHP_EOL;

mail(
  "mazur097mazur@gmail.com" .$to,
  "otkudalist@gmail.com" .$from,
  /* message body */
  "
  Imię: $name
  \nWiadomość od klienta: $letter
  \nOdwrotny związek: $tel lub $email
  " 
  /* message body end */
  .$message
);
?>