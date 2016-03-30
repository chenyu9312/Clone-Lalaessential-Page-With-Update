
			//these variables holds the setTimeout functions
			var myVar1;
			var myVar2;
			var myVar3;
			var myVar4;
			var myVar5;
			var myVar6;
			var myVar7;
			var myVar8;
			//

			
			//main code that'll slide the divs with the images
			function myFunction()
			{
				myVar1=setTimeout(changeD1,3000);
				myVar2=setTimeout(changeD2,6000);
				myVar3=setTimeout(changeD3,9000);
				myVar4=setTimeout(changeD4,12000);
				myVar5=setTimeout(changeD5,15000);
				myVar6=setTimeout(changeD6,18000);
				myVar7=setTimeout(changeD7,21000);
				myVar8=setTimeout(changeD8,24000);
			}
			//
			
			function changeD1()
			{
				document.getElementById("divImageContainer1").style.opacity=1;
				
								
				document.getElementById("divImageContainer2").style.opacity=0;
				document.getElementById("divImageContainer3").style.opacity=0;
				document.getElementById("divImageContainer4").style.opacity=0;
				document.getElementById("divImageContainer5").style.opacity=0;
				document.getElementById("divImageContainer6").style.opacity=0;
				document.getElementById("divImageContainer7").style.opacity=0;
				document.getElementById("divImageContainer8").style.opacity=0;
			}
			function changeD2()
			{
				document.getElementById("divImageContainer2").style.opacity=1;
				
				document.getElementById("divImageContainer1").style.opacity=0;
				document.getElementById("divImageContainer3").style.opacity=0;
				document.getElementById("divImageContainer4").style.opacity=0;
				document.getElementById("divImageContainer5").style.opacity=0;
				document.getElementById("divImageContainer6").style.opacity=0;
				document.getElementById("divImageContainer7").style.opacity=0;
				document.getElementById("divImageContainer8").style.opacity=0;
			}
			function changeD3()
			{
				document.getElementById("divImageContainer3").style.opacity=1;
				
				document.getElementById("divImageContainer1").style.opacity=0;
				document.getElementById("divImageContainer2").style.opacity=0;
				document.getElementById("divImageContainer4").style.opacity=0;
				document.getElementById("divImageContainer5").style.opacity=0;
				document.getElementById("divImageContainer6").style.opacity=0;
				document.getElementById("divImageContainer7").style.opacity=0;
				document.getElementById("divImageContainer8").style.opacity=0;
			}
			function changeD4()
			{
				document.getElementById("divImageContainer4").style.opacity=1;
				
				document.getElementById("divImageContainer1").style.opacity=0;
				document.getElementById("divImageContainer2").style.opacity=0;
				document.getElementById("divImageContainer3").style.opacity=0;
				document.getElementById("divImageContainer5").style.opacity=0;
				document.getElementById("divImageContainer6").style.opacity=0;
				document.getElementById("divImageContainer7").style.opacity=0;
				document.getElementById("divImageContainer8").style.opacity=0;
			}
			function changeD5()
			{
				document.getElementById("divImageContainer5").style.opacity=1;
				
				document.getElementById("divImageContainer1").style.opacity=0;
				document.getElementById("divImageContainer2").style.opacity=0;
				document.getElementById("divImageContainer3").style.opacity=0;
				document.getElementById("divImageContainer4").style.opacity=0;
				document.getElementById("divImageContainer6").style.opacity=0;
				document.getElementById("divImageContainer7").style.opacity=0;
				document.getElementById("divImageContainer8").style.opacity=0;
			}
			function changeD6()
			{
				document.getElementById("divImageContainer6").style.opacity=1;
				
				document.getElementById("divImageContainer1").style.opacity=0;
				document.getElementById("divImageContainer2").style.opacity=0;
				document.getElementById("divImageContainer3").style.opacity=0;
				document.getElementById("divImageContainer4").style.opacity=0;
				document.getElementById("divImageContainer5").style.opacity=0;
				document.getElementById("divImageContainer7").style.opacity=0;
				document.getElementById("divImageContainer8").style.opacity=0;
			}
			function changeD7()
			{
				document.getElementById("divImageContainer7").style.opacity=1;
				
				document.getElementById("divImageContainer1").style.opacity=0;
				document.getElementById("divImageContainer2").style.opacity=0;
				document.getElementById("divImageContainer3").style.opacity=0;
				document.getElementById("divImageContainer4").style.opacity=0;
				document.getElementById("divImageContainer5").style.opacity=0;
				document.getElementById("divImageContainer6").style.opacity=0;
				document.getElementById("divImageContainer8").style.opacity=0;
			}
			function changeD8()
			{
				document.getElementById("divImageContainer8").style.opacity=1;
				
				document.getElementById("divImageContainer1").style.opacity=0;
				document.getElementById("divImageContainer2").style.opacity=0;
				document.getElementById("divImageContainer3").style.opacity=0;
				document.getElementById("divImageContainer4").style.opacity=0;
				document.getElementById("divImageContainer5").style.opacity=0;
				document.getElementById("divImageContainer6").style.opacity=0;
				document.getElementById("divImageContainer7").style.opacity=0;
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
			}