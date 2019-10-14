	document.getElementById("id_logic_version").innerHTML= "logic_version=2019.10.14.1";
	document.getElementById("id_buttom").addEventListener("click",solve_ec2);
	function t_ec2(){
	this.read_coeficients = function()
	{
		this.a = document.getElementById("id_a").value;
		this.b = document.getElementById("id_b").value;
		this.c = document.getElementById("id_c").value;
		
	}
	this compute_solution()
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
	{var ec2=var t_ec2();
	ec2.read_coeficients();
	ec2.compute_solution();
	ec2.print_solutions();
	}
	}