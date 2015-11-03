var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(presionBoton1);
  x=$("#boton2");
  x.click(presionBoton2);
}

function presionBoton1()
{
  var x;
  x=$("#formulario");
  x.html('<form>Ingrese nombre:<input type="text" id="nombre"><br>Ingrese clave:<input type="text" id="clave"><br><input type="submit" value="confirmar"></form>'); 
}

function presionBoton2()
{
  var x;
  x=$("#formulario");
  alert(x.html());
}