<!DOCTYPE html>
<html lang="en-US"
	<head>
	<meta charset="utf-8">
	<title>emails</title>
	<style type="text/css">
	body
	{
		background-color:ivory;
	}
	h2
	{
		color:chocolate;
	}
	</style>
<html>
<body>



<?php
	if (!empty($_POST["email"]))
   	{
		$email = $_POST["email"];
		$subject="New Subscriber: ";
		$emailID="info@lalaskinessentials.com";

		mail($emailID,$subject,$email);

		if(mail($emailID, $subject,$email))
		{
    		echo "<h4>Thank you for subscribing!</h4>";
		}
		else
		{
   		 	echo "<h4>Mail sending failed.</h4>";
		}
	}
?>


</body>
</html>