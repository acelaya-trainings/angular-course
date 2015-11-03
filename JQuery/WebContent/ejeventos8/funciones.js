var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#text1");
  x.focus(tomaFoco);
  x.blur(pierdeFoco);
  x=$("#text2");
  x.focus(tomaFoco);
  x.blur(pierdeFoco);
}

function tomaFoco()
{
  var x=$(this);
  x.css("color","#f00");
}

function pierdeFoco()
{
  var x=$(this);
  x.css("color","#00f");
}