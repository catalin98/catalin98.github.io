document.getElementById("id_logic_version").innerHTML="Logic = 2019.11.04.0";
window.addEventListener("deviceorientation", on_gyro_data_uab);
function on_gyro_data_uab(e)
{
	document.getElementById("id_alpha").innerHTML ="Logic id_alpha";
	document.getElementById("id_beta").innerHTML="Logic id_beta";
	document.getElementById("id_gamma")innerHTML="Logic id_gamma";
	
	
	
}
