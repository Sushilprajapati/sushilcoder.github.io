<?php
// the message
// $msg = "First line of text\nSecond line of text";
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

// use wordwrap() if lines are longer than 70 characters
// $msg = wordwrap($msg,70);

// send email
if(empty($name)|| empty($email) || empty($message))
{
	echo "Please, Fill all fields";
}
else
{
mail("susheelprajapati07001@gmail.com","My subject","User Information", $message, "From: <$name <$email>");

echo "<script type= 'text/javascript'> alert('Message sent successfully '); 
window.history.log(-1); </script>";
}
?>