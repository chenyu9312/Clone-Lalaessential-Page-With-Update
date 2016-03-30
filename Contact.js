	var plet=/[^A-z]/gi;
	var nums=/[0-9]/gi;
	var phypen=/_/gi
	var other=/[~!@#$=%^&*()_+\][{}|':";/.,<>?`]/gi;

	function checkName()
	{
		var name = document.getElementById("firstName").value;
		if(name=="")
			document.getElementById("firstName").style.border="3px solid red";
	}

	function checkEmail()
	{
		var email = document.getElementById("email").value;
		if(email=="")
			document.getElementById("email").style.border="3px solid red";
	}

	function checkComment()
	{
		var comment = document.getElementById("commentHere").value;
		if(comment=="")
			document.getElementById("commentHere").style.border="3px solid red";
	}
	
	//subscribe validation incase they are not using Chrome
	function validateForm() 
	{
    	var x = document.forms["formname"]["email"].value;
   		if (x == null || x == "") 
   		{
        		alert("Email must be filled out");
        		return false;
    	}
    	var y = document.forms["formname"]["name"].value;
   		if (y == null || y == "") 
   		{
        		alert("Name must be filled out");
        		return false;
    	}
	}

