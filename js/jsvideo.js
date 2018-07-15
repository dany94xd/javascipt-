window.onload = function(){
  var urlVideo = window.opener.document.getElementById("urlVideo").innerHTML;

  var cadena = "<source src='" + urlVideo + "' type='video/mp4'>"
  //alert(urlVideo);
  document.getElementById("video").innerHTML=cadena;
  //alert(document.getElementById("vid").getAttribute("src"));
}




      var myVideo = document.querySelector("#video");

      var vid = document.getElementById("video");
      //vid.onplay = function() {
        //  alert("The video has started to play");
      //};

      vid.onended = function() {
         //alert("The video has finished");
          //  document.getElementById('actividad').style.display='block';
      mostrar();
      };



       function mostrar() {
          document.getElementById('actividad').style.display='block';
      //   // body...
      }

     // function commands
       function playPause(){
        if(myVideo.paused)
          myVideo.play();
        else
          myVideo.pause();
      }

     