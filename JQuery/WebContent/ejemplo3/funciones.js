var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("tr");
  x.click(presionFila);
}

function presionFila()
{
  var x;
  x=$(this);
  x.css("background-color","#ff0000");
}