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
  alert('se presion� un p�rrafo del documento');
}

function presionpresionParrafoSegundaTabla()
{
  alert('se presion� un p�rrafo contenido en la segunda tabla.');
}