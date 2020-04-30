<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

    $name = trim($_POST["name"]); //name-ы с form, для каждого input
    $tel  = trim($_POST["tel"]); // 
    $email = trim($_POST["email"]);
    $letter = trim($_POST["letter"]);

    foreach ( $_POST as $key => $value ) {
        if ( $value != "" && $key != "name" && $key != "tel" && $key != "email" && $key != "letter") { // если value не пустой + key не равен name и phone
            $message .= "
            " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key $name</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value $tel</td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value $email</td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value $letter</td>
        </tr>
        ";
    }
}
} 

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($name).' <'.$phone.'>' . PHP_EOL .
'Reply-To: '.$phone.'' . PHP_EOL;

mail("mazur097mazur@gmail.com", "Заявка с сайта", "Имя".$name.". Телефон: ".$tel ,"From: localsendmazur097mazur@gmail.com \r\n" );
?>