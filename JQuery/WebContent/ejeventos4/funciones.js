var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$(document);
  x.mousemove(moverMouse);
}

function moverMouse(event)
{
  var x;
  x=$("#corx");
  x.text("coordenada x="+event.clientX);
  x=$("#cory");
  x.text("coordenada y="+event.clientY);
}