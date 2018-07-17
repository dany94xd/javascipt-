 

window.onload = function(){
  var urlVideo = window.opener.document.getElementById("urlVideo").innerHTML;
  var indexVideo = window.opener.document.getElementById("indexVideo").innerHTML;
  var valor = urlVideo.indexOf("https");
  //alert(valor);
  var cadena = "";
  if (valor == -1) {
    //alert("es local");
    cadena = "<iframe src='" + urlVideo + "' frameborder='0' allowfullscreen></iframe>";
  }else{
    //alert("hola");
    var patron = "https://www.youtube.com/watch?v=";
    var nuevoValor = "https://www.youtube.com/embed/";
    urlVideo = urlVideo.replace(patron, nuevoValor);
    //alert(urlVideo);
    cadena = "<iframe src='" + urlVideo + "' frameborder='0' allowfullscreen></iframe>";
  }

  /**/
  //window.opener.close();
  //var cadena = "<source src='" + urlVideo + "' type='video/mp4'>";
  //var cadena = "<iframe src='https://www.youtube.com/embed/" + urlVideo + "' frameborder='0' allowfullscreen></iframe>";
  document.getElementById("video").innerHTML=cadena;
  //alert(urlVideo);
   

  //alert(document.getElementById("vid").getAttribute("src"));
  //myVideo = document.querySelector("#video");
  //vid = document.getElementById("video");
}

       //var myVideo = document.querySelector("#video");
      //var vid = document.getElementById("video");
      
      vid.onended = function() {
        alert("The video has finished");
         //var win= window.open("preguntas.html");         
        document.getElementById('preguntas').style.display='block';
      };

      
     // function commands
       function playPause(){
        if(myVideo.paused)
          myVideo.play();
        else
          myVideo.pause();
      }

function mostrarPreguntas(){

var vid;
if(vid === undefined){
var vid = document.getElementById("video");
var myVideo = document.querySelector("#video");  
} else{

alert(vid);  
}
    document.getElementById("indexVideo").innerHTML=indexVideo;
    var win= window.open("preguntas.html");          
           
}
      