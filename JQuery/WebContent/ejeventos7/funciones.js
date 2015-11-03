var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#buscar");
  x.focus(tomaFoco);
}

function tomaFoco()
{
  var x=$("#buscar");
  x.attr("value","");
}