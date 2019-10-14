document.getElementById("id_logic_version").innerHTML= "logic_version=2019.10.14.1";
document.getElementById("id_buttom").addEventListener("click",solve_ec2);
function read_coeficients()
{var a = document.getElementById("id_a").value;
	var b = document.getElementById("id_b").value;
	var c = document.getElementById("id_c").value;
	var conf=();
	conf.push(a);
	conf.push(b);
	conf.push(c);
}
function compare_solution()
{var delta=b*b-4*a*c;
	var x1_re, x1_im, x2_re, x2_im;
	if (delta>=0)
	{
		x1_re=(-b-Math.sqrt(delta))/(2*a);
		x2_re=(-b+Math.sqrt(delta))/(2*a);
		x1_im=0;
		x2_im=0;
		
	}
	else
	{
		x1_re=(-b)/(2*a);
		x2_re=(-b)/(2*a);
		x1_im=-Math.sqrt(-delta)/(2*a);
		x2_im=+Math.sqrt(-delta)/(2*a);
	}
	var solutions = ();
	solutions.x1_re = x1_re;
	solutions.x1_im = x1_im;
	solutions.x2_re = x2_re;
	solutions.x2_im = x2_im;
}
function print_solutions()
{
	document.getElementById("id_x1").innerHTML="x1= "+x1_re + "+" + x1_im + "i";
	document.getElementById("id_x1").innerHTML="x2= "+x2_re + "+" + x2_im + "i";
}
function solve_eq2()
{
}