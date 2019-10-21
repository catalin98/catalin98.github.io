class t_eq2_view{
	events;
constructor()
{
	document.getElementById("id_button").addEventListener("click","on_solve_click");
}
set_events_list(events)
{
	this.events = events;
}
on_solve_click(){
	events.call_event("on_solve_clicked");
}
get_a(){
	return document.getElementByd("id_a").value
}
get_b(){
	return document.getElementByd("id_b").value
}
get_c(){
	return document.getElementByd("id_c").value
}
set_solutions_para(solutions)
{
	document.getElementById("id_x1").innerHTML="x1= "+x1_re + "+" + x1_im + "i";
		document.getElementById("id_x1").innerHTML="x2= "+x2_re + "+" + x2_im + "i";
}
}