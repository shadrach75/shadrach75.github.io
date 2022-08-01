<?php 
 //getting form values
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){  // If email and message field is empty
    
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //if user entered email is valid
       
        $reciever = "kwakyes7544@gmail.com"; //email reciever email address
        
        $subject = "From: $name <$email>"; //subject of the email. e.g. From: Shadrack <kwakyes7544@gmail>
        
        //merging contacts \n means next line
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\nMessage: $message\n\nRegards,\n$name";
       
        $sender = "From: $email"; //Sender's email
       
        if(mail($reciever, $subject, $body, $sender)){  //mail() is a inbuilt php function to send mail
             echo "Your message has been sent";
        }else {
            echo "Sorry failed to send your message";
        }
        
    }else{
        echo "Enter a valid email address";
    }

}else{
    echo "Email and message field is required!";
}
?>