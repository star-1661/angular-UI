<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

//Load Composer's autoloader
require 'vendor/autoload.php';
$companyName = $_POST['companyName'];
$contactName = $_POST['contactName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$companyWebsite = $_POST['companyWebsite'];

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'webbjames1117@gmail.com';                 // SMTP username
    $mail->Password = 'coronajames_1117';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('webbjames1117@gmail.com', 'webbjames');
//    $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
    $mail->addAddress('wge952457@gmail.com');               // Name is optional
    // $mail->addAddress('Buddy@Blazinghog.com');               // Name is optional


    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'There is new Recipient';
    $mail->Body    = 'Please review below information<br> CompanyName:'.$companyName.'<br>ContactName:'.$contactName.'<br>Email'.$email.'<br>Phone'.$phone.'<br>CompanyWebsite'.$companyWebsite;
    

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
