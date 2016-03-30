	var plet=/[^A-z]/gi;
	var nums=/[0-9]/gi;
	var phypen=/_/gi
	var other=/[~!@#$=%^&*()_+\][{}|':";/.,<>?`]/gi;

	function checkName()
	{
		var name = document.getElementById("first name").value;
		if(name=="")
			alert("Name field is empty");
		else if(name==null)
			alert("Name field is not filled out");
		else if(name.match(phypen))
			alert("Your name cannot contain a hyphen");
		else if(name.match(nums))
			alert("Your name cannot contain a number");
		else (name.match(other))
			alert("Your name must consist of letters only");
	}

	function checkEmail()
	{
		var email = document.getElementById("email").value;
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
			alert ("Please enter a valid email");
	}

	function checkComment()
	{
		var comment = document.getElementById("comment").value;
		if (comment==""||comment==null)
			alert("Please fill out the comments section");
	}

