<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "./phpMailer/src/Exception.php";
require "./phpMailer/src/PHPMailer.php";

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isHTML(true);    

// от кого будет уходить письмо?
$mail->setFrom('dzharuzov@mail.ru'); 
// Кому будет уходить письмо (можно указать несколько адресатов)
$mail->addAddress('egorka54896@gmail.com');  
//Тема письма  
$mail->Subject = 'Letter from the CV form!';

//из чего состоит письмо 
$body = "<h1>Response from CV website</h1>";
if(trim(!empty($_POST['name']))) {
	$body = "<p><strong>Name:</strong> $_POST['name']</p>";
}

if(trim(!empty($_POST['email']))) {
	$body = "<p><strong>Email:</strong> $_POST['email']</p>";
}

if(trim(!empty($_POST['phone']))) {
	$body = "<p><strong>Phone number:</strong> $_POST['phone']</p>";
}

if(trim(!empty($_POST['message']))) {
	$body = "<p><strong>Message:</strong> $_POST['message']</p>";
}

$mail->Body = $body;   





// $mail->isSMTP();                    // Set mailer to use SMTP
// $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
// $mail->SMTPAuth = true;             // Enable SMTP authentication
// $mail->Username = 'dzharuzov@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
// $mail->Password = '$dk820&123'; // Ваш пароль от почты с которой будут отправляться письма
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров


 




if(!$mail->send()) {
    $message = 'Error';
} else {
	$message = 'Data received';
}

$response = ["message" => $message];

header("Content-type: application/json");
echo json_encode($response);
?>