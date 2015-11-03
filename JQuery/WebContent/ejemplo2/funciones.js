var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#titulo1");
  x.click(presionTitulo1);
  x=$("#titulo2");
  x.click(presionTitulo2);
}

function presionTitulo1()
{
  var x;
  x=$("#titulo1");
  x.css("color","#ff0000");
  x.css("background-color","#ffff00");
  x.css("font-family","Courier");
}

function presionTitulo2()
{
  var x;
  x=$("#titulo2");
  x.css("color","#ffff00");
  x.css("background-color","#ff0000");
  x.css("font-family","Arial");
}