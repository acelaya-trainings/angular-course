var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("p");
  x.click(presionParrafoDocumento);
  x=$("#tabla2 p");
  x.click(presionpresionParrafoSegundaTabla);
}

function presionParrafoDocumento()
{
  alert('se presionó un párrafo del documento');
}

function presionpresionParrafoSegundaTabla()
{
  alert('se presionó un párrafo contenido en la segunda tabla.');
}