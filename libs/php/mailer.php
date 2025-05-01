<?php
    header('Content-Type: application/json' );

    use PHPMailer\PHPMailer\PHPMailer;    
    
    require 'assets/PHPMailer-6.9.3/src/PHPMailer.php';
    require 'assets/PHPMailer-6.9.3/src/SMTP.php';
    
    
    $mail = new PHPMailer(true);

    ['name' => $name, 'email' => $email, 'message' => $message]  = json_decode(file_get_contents('php://input'), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Form not valid - try again']);
        exit;
    }

    $name = strip_tags(trim($name));
    $email = strip_tags(trim($email));
    $message = strip_tags(trim($message));

    if (!is_string($name) || !strlen($name)) {
        http_response_code(400);
        echo json_encode(['error' => 'Enter a name']);
        exit;
    }

    if (!is_string($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Enter a valid email']);
        exit;
    }

    if (!is_string($message) || !strlen($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'Fill in the message field']);
        exit;
    }

    try {
        $mail = new PHPMailer(); 
        $mail->isSMTP();  

        
        $mail->Host = $_ENV['SMTP_SERVER'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USER']; 
        $mail->Password = $_ENV['PASSWORD'];   
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
        $mail->Port = 587;

        $mail->setFrom($_ENV['SMTP_EMAIL']);
        $mail->addAddress($_ENV['SMTP_EMAIL']);
        $mail->Subject = "Message on jordanss.co.uk from $email";
        $mail->Body = "Name: $name\nEmail: $email\n\n$message";

        
    if ($mail->send()) {
        http_response_code(200);
        echo json_encode(['data' => 'success']);
        exit;
    } else {
        throw new Exception();
    }
}  catch (Exception) {
    echo json_encode(['error' => "Message could not be sent: try again"]);
}