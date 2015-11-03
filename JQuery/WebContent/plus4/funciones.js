var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#boton1");
  x.click(ocultarMostrarRecuadro);
}

function ocultarMostrarRecuadro()
{
  var x=$("#descripcion");
  x.toggle("slow");
}