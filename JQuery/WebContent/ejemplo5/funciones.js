var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(resaltar);
}

function resaltar()
{
  var x;
  x=$(".resaltado");
  x.css("background-color","#ffff00");
}