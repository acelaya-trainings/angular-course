var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(eliminarElementos);
  x=$("#boton2");
  x.click(restaurarLista);
  x=$("#boton3");
  x.click(anadirElementoFinal);
  x=$("#boton4");
  x.click(anadirElementoPrincipio);
  x=$("#boton5");
  x.click(eliminarElementoFinal);
  x=$("#boton6");
  x.click(eliminarElementoPrincipio);
}

function eliminarElementos()
{
  var x;
  x=$("ul");
  x.empty();
}

function restaurarLista()
{
  $("ul").html('<li>Primer item.</li><li>Segundo item.</li><li>Tercer item.</li><li>Cuarto item.</li>');
}

function anadirElementoFinal()
{
  var x;
  x=$("ul");
  x.append("<li>otro item al final</li>");
}

function anadirElementoPrincipio()
{
  var x;
  x=$("ul");
  x.prepend("<li>otro item al principio</li>");
}

function eliminarElementoFinal()
{
  var x;
  x=$("li");
  var cantidad=x.length;
  x=x.eq(cantidad-1);
  x.remove();
}

function eliminarElementoPrincipio()
{
  var x;
  x=$("li");
  x=x.eq(0);
  x.remove();
}

function eliminarPrimeroSegundo()
{
  var x;
  x=$("li");
  x=x.lt(2);
  x.remove();
}

function eliminarDosUltimos()
{
  var x;
  x=$("li");
  x=x.gt(x.length-3);
  x.remove();
}