class t_eq2_controller{
	view;
	model;
constructor(view,model)
{this.view =view;
this.model = model;
//construim o lista
var events = new t_events();
//adaugam on solve in lista
//trasmitem lista la view
events.add_event("solve_clicked",this.on_solve);
//generam un eveniment care genereaza metoda solve stocata in lista
this.view.set_events_list(events);
}
on_solve()
{
var a = this.view.get_a();
var b = this.view.get_b();
var c= this.view.get_c();

this.model.set_coefficients(a,b,c);
this.model.solve();
var solutions = this.model.get_solutions();

this.view.set_solutions_para(solutions);

}
}
 const var app = new t_eq2_controller(new t_eq2_view(), new t_eq2_model());
