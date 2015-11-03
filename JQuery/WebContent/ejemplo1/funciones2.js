var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  var y;
  x=$("#boton1");
  y=$("#boton2");
  x.click(presionBoton("uno"));
  y.click(presionBoton("dos"));
}

function presionBoton(nombre)
{
  alert("Se presionó el botón" + nombre);
}