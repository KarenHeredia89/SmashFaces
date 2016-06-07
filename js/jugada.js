function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};


function desplegarNuevaJugada(){
var tamanoArreglo = nombres.lenght;
var numeroAlAzar = enteroRandomEnRango (0,tamanoArreglo);

var imagen = 'fotos/' + imagenes[numeroAlAzar]	
$('#imagenPersona').attr('src', imagen);

};

$(document).ready(function(){
 
	$('#btnComprobar').click(function(){
  		var nombre = $('#inputNombre').val();
  
	});

});