var numeroAlAzar;
var puntos = 0;
var intentos = 0;

var imagenes = [
  "AlmaPatriciaJimenez.JPG",  
  "AnalyMiranda.JPG",
  "AnaMariaBarbosa.JPG", 
  "AreliRodriguez.JPG",
  "BeatrizQuesadas.JPG",
  "CeciliaGuadalupeAmpudia.JPG",      
  "ClaudiaHernandez.JPG",
  "DanielaBelemGarcia.JPG",   
  "ElisaGuadalupeMartinez.JPG",
  "EvelynVazquez.JPG",         
  "GabrielaPenaloza.JPG",
  "GabrielaTaydeMorales.JPG",
  "GrisselCoutino.JPG",        
  "GuadalupeGuerrero.JPG",
  "JohanaAlexaVargas.JPG",    
  "JoyceZeltzinHernandez.JPG",
  "JuanaOfeliaGarcia.JPG",    
  "KarenASharonDeDiego.JPG",
  "KarenCruzHeredia.JPG",     
  "KarenQuiroz.JPG",
  "KarlaMonicaLlerenas.JPG",  
  "KarlaVargas.JPG",
  "LeslieAnigailVazquez.JPG", 
  "LilianMishelMartinez.JPG",
  "MilcaSaraiDelAngel.JPG",  
  "NaibitLeonel.JPG",
  "NayeliCarbajal.JPG",        
  "NellyMontserratSaavedra.JPG",
  "ReynaHernandez.JPG",        
  "RubiAdrianaSantiago.JPG",
  "RuthLopez.JPG",             
  "RuthZacnicteVega.JPG",
  "SandraBollo.JPG",           
  "SandraDiaz.JPG",
  "VianeyTavathaMoreno.JPG",  
  "ZazilAuroraMartinez.JPG"
];

var nombres = [ "Alma", "Analy", "Ana", "Areli", "Beatriz", "Cecilia", "Claudia", 
"Daniela", "Elisa", "Evelyn", "Gabriela", "Tayde", "Grissel", "Guadalupe", "Johana", 
"Joyce", "Juana", "Sharon", "Heredia", "Karen", "Monica", "Karla", "Leslie", 
"Mishel", "Milca", "Naibit", "Nayeli", "Nelo", "Reyna", "Adriana", "Ruth",
 "Ruth", "Sandra", "Sandra", "Vianey", "Zazil"];




function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};


function desplegarNuevaJugada(){
var tamanoArreglo = nombres.length;


if(tamanoArreglo > 0){
  numeroAlAzar = enteroRandomEnRango (0,tamanoArreglo);
  var imagen = 'fotos/' + imagenes[numeroAlAzar];
  $('#imagenPersona').attr('src', imagen);
}else{
  alert('¡¡¡¡Triunfaste!!!');
}


};

$(document).ready(function(){
 
  $('#btnComprobar').click(function(){
    var nombre =$('#inputNombre').val();
    console.log('El usuario escribio' + nombre);

    var nombreAdivinar = nombres[numeroAlAzar];
    console.log('El nombre correcto es:' + nombreAdivinar);
      
    if (nombre === nombreAdivinar){

      //Quitamos el elemento con la función 'splice' que ya no queremos
      nombres.splice(numeroAlAzar,1);
      imagenes.splice(numeroAlAzar,1);
      puntos = puntos + 5;

      desplegarNuevaJugada();
    }else{
      alert('Error 500!')
      puntos = puntos -1;//puntos--;
      intentos = intentos +1//intentos++;
    };
    $('#puntos').text('Puntos' + puntos);

  });

  desplegarNuevaJugada();
});