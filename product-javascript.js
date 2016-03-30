			var ingre=document.getElementById("headerIngredients");
			var desc=document.getElementById("headerDescription");
			var touse=document.getElementById("headerUse");
			ingre.onclick=function()
			{
				document.getElementById("description1").style.opacity=0;
				document.getElementById("ingredients1").style.opacity=1;
				document.getElementById("howtouse").style.opacity=0;
			}
			desc.onclick=function()
			{
				document.getElementById("description1").style.opacity=1;
				document.getElementById("ingredients1").style.opacity=0;
				document.getElementById("howtouse").style.opacity=0;
			}
			touse.onclick=function()
			{
				document.getElementById("description1").style.opacity=0;
				document.getElementById("ingredients1").style.opacity=0;
				document.getElementById("howtouse").style.opacity=1;
			}