var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("td");
  x.mousedown(presionaMouse);
  x.mouseup(sueltaMouse);
}


function presionaMouse()
{
  $(this).css("background-color","#ff0");
}

function sueltaMouse()
{
  $(this).css("background-color","#fff");
}