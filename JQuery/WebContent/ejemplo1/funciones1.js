addEvent(window,'load',inicializarEventos,false);

function inicializarEventos()
{
  var boton1=document.getElementById('boton1');
  addEvent(boton1,'click',presionBoton,false);
}

function presionBoton(e)
{
  alert('se presion� el bot�n');
}

function addEvent(elemento,nomevento,funcion,captura)
{
  if (elemento.attachEvent)
  {
    elemento.attachEvent('on'+nomevento,funcion);
    return true;
  }
  else  
    if (elemento.addEventListener)
    {
      elemento.addEventListener(nomevento,funcion,captura);
      return true;
    }
    else
      return false;
}