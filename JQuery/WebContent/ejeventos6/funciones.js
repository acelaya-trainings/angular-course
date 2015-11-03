var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#recuadro");
  x.dblclick(dobleClic);
}

function dobleClic()
{
  var x;
  x=$(this);
  x.hide();
}