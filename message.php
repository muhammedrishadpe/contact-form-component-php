<?php


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];
if (!empty($email) && !empty($message)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // if user entered email is valid
        $receiver = "rishadpe@gmail.com";
        $subject = "From: $name <$email>";
        // merging concating all user values inside body variable.
        $body = "Name: $name\nEmail: $email\nPhone: $website\n\nMessage: $message\n\nRegarda, \n$name";
        $sender = "From: $email"; //sender email
        if (mail($receiver, $subject, $body, $sender)) { // mail() is a inbuild php function to send mail
            echo "Your message has been sent!";
        } else {
            echo "Sorry, failed to send your message!";
        };
    } else {
        echo "Enter a valid email address!";
    }
} else {
    echo "Email and password field is required!";
}
