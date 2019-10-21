class t_eq2_model{
a;
b;
c;
x1_re;
x1_im;
x2_re;
x2_im;
constructor()
{this.a=1;
this.b=1;
this.c=1;
this.x1_re=0;
this.x1_im=0;
this.x2_re=0;
this.x2_im=0;
}
set_coefficients(a,b,c)
this.a=a;
this.b=b;
this.c=c;
solve{

}
get_solutions()
{var solutions = {};
solutions.x1_re = x1_re;
solutions.x1_re = x1_re;
solutions.x2_im = x2_im;
solutions.x2_re = x2_re;
return solutions;
}
}