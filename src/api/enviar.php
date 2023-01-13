<?php 
    header('Access-Control-Allow-Origin: *');
   
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $to = "crispim.rodrigues.oficial@gmail.com";
        $subject = "Mensagem enviada por $name";

        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers .= "From: $name <$email>";
      
        $enviaremail =  mail($to, $subject, $message, $headers);
        if($enviaremail){
            echo "enviado";
        }else{
            echo "Error";
        }  
    

?>