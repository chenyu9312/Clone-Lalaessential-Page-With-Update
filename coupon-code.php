<?php

	$hostedButtonId = "QLUTM22ASZGSN";
	$amount = 30;

	$arr = array(
	"take5" => array("hostedButtonId" => "DC98545DNUN4A", "discount" => "5"),
	"take10" => array("hostedButtonId" => "", "discount" => "10")
	);

	foreach ($arr as $key => $value) {

		if ($key == $_POST["couponCode"])
		{
			$hostedButtonId = $value["hostedButtonId"];
			$discount = $value["discount"];
			$amount = ($amount - $discount);
			break;
		}
	}

?>