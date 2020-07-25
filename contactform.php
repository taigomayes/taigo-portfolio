<?php 

if (isset($_POST['submit'])) {

    $name = $_['name'];
    $mailFrom = $_['mail'];
    $message = $_['message'];

    $mailTo = "julianmayes@hotmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved and email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
  
}

?>
