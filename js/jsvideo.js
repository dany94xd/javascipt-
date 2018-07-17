



  

window.onload = function(){
  var urlVideo = window.opener.document.getElementById("urlVideo").innerHTML;
  var indexVideo = window.opener.document.getElementById("indexVideo").innerHTML;
  //window.opener.close();
  var cadena = "<source src='" + urlVideo + "' type='video/mp4'>";
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
      