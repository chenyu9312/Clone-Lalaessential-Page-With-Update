

function hideDiscount()
{
		document.getElementById("payPalImageDiscount").style.display="none";
		//document.getElementById("discountTable").style.display="none";
		//document.getElementById("discountTable").style.zIndex=-999;
		
		//this is showing the select for the normal price
		document.getElementById("discountProduct").style.display="none";		
		
}
	
function applyCoupon()
{
    //change discount to 25 percent off
	x=document.getElementById("couponCodeCheck").value;
	if(x=="SAVE25"||x=="save25")
	{
		document.getElementById("payPalImageDiscount").style.display="block";
		//document.getElementById("discountTable").style.display="block";
		//document.getElementById("discountTable").style.zIndex=999;
		
		//this is hiding the select for the normal price and showing it for the discount price
		document.getElementById("initialProduct").style.display="none";
		document.getElementById("discountProduct").style.display="block";

	}
		
}



