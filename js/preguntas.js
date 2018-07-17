var indexVideo = "";
var indexImagen = "";

window.onload = function(){
   
  //alert(indexVideo);
}   

/*Funcion inicial al cargar la pagina*/
$(function () {
    
    mostrarHtml();

     $("#btnplay").click(function (e) {
        var i = $("#paginas1 div").length;
        var v = new Object();
        v.audio = "";

        visualizarSonido(i, v);
    });

});
//para poner link 
function linkear(urlVideo){
    
   // alert('OK...')
    //let codigo =$('#tabla tr').find('td:eq(1)').text();
    let win= window.open("", urlVideo, "width=500, height=500");
    win.document.body.innerHTML=urlVideo;
}

$('#index').click(linkear);


//carga de div con las imagenes correspondientes
var mostrarHtml = function () {
    indexVideo = window.opener.document.getElementById("indexVideo").innerHTML; 
    var audio = objJSON.contenido[0].video[indexVideo].preguntas[0].audio;
    var linea_audio = "<audio src='"+ audio+"'' controls autoplay></audio> ";    
    var resp = objJSON.contenido[0].video[indexVideo].preguntas[0].respuesta;
  resp = resp - 1;
  //alert(resp);    
    var opciones_img = "";
    $.each(objJSON.contenido[0].video[indexVideo].preguntas[0].opciones, function (index, value) { //"<td>" + "</td>"
        
               opciones_img += "<div class='responsive'><div class='gallery'><img id='"+ index +"'class='imagen' src='" + value.opcion + "' alt='"+ value.opcion +"'></div></div>";
    });

    $("#opciones").html("");
    $("#opciones").append(opciones_img);

    $("#caja").html("");
    $("#caja").append(linea_audio);

    


    $.each($("#opciones img.imagen"), function (i, v) {
        $(v).click(function (e) {
            indexImagen = $(e.target).attr("id");
            //alert(indexImagen);
            if(indexImagen == resp){
                var r = document.getElementById("ganar");
                //alert(a)
                r.play();
                alert("¡¡¡¡FELICIDADES!!!!");
            }else{
                var s = document.getElementById("perder");
                s.play();
                //alert("¡¡¡¡VUELVE A INTENTARLO!!!!");
            }
            
        });
    });
}

