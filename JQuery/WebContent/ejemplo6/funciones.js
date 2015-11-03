var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#boton1");
  x.click(extraerTexto);
  x=$("#boton2");
  x.click(modificarTexto);
  x=$("#boton3");
  x.click(modificarDatosTabla);
}

function extraerTexto()
{
  var x=$("#parrafo1");
  alert(x.text());
}

function modificarTexto()
{
  var x=$("#parrafo1");
  x.text("Nuevo texto del párrafo");
}

function modificarDatosTabla()
{
  var x=$("td");
  x.text("texto nuevo");
}