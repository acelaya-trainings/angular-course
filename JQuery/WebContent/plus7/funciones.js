$(document).ready(function () {
  $("#boton1").click(function () {
    $("#descripcion").fadeTo("slow",0.5).hide("slow");
  });
  $("#boton2").click(function () {
    $("#descripcion").show().fadeTo("slow",1);
  })
})