<?php
if (isset($_POST['submit'])){

    $name=$_post['name'];
    $mailfrom=$_post['mail'];
    $message=$_post['message'];


    
    $mailto="srigokulkrishnan@gmail.com";
    $headers="form:".$mailfrom;
    $txt= "you have recieved an e-mail from".$name.".\n\n".$message;

    mail($mailto, $subject, $txt ,$headers);
    header("location:index.php?mailsend");
} 
