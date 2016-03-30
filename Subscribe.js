	var plet=/[^A-z]/gi;
	var nums=/[0-9]/gi;
	var phypen=/_/gi
	var other=/[~!@#$=%^&*()_+\][{}|':";/.,<>?`]/gi;


	function checkEmail()
	{
		var email = document.getElementById("email").value;
		if(email=="")
			document.getElementById("email").style.border="3px solid red";
	}
