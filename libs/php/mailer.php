<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    
    require 'assets/PHPMailer-6.9.3/src/PHPMailer.php';
    require 'assets/PHPMailer-6.9.3/src/SMTP.php';
    require 'assets/PHPMailer-6.9.3/src/Exception.php';
    
    
    $mail = new PHPMailer(true);
    
    try {
        
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      
        $mail->isSMTP();                                            
        $mail->Host       = 'smtp.example.com';                     
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'user@example.com';                     
        $mail->Password   = 'secret';                               
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
        $mail->Port       = 465;                                    
    
        
        $mail->setFrom('from@example.com', 'Mailer');
        $mail->addAddress('joe@example.net', 'Joe User');     
        $mail->addAddress('ellen@example.com');               
        $mail->addReplyTo('info@example.com', 'Information');
        $mail->addCC('cc@example.com');
        $mail->addBCC('bcc@example.com');
    
        
        $mail->addAttachment('/var/tmp/file.tar.gz');         
        $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    
    
        
        $mail->isHTML(true);                                  
        $mail->Subject = 'Here is the subject';
        $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }