﻿var indexVideo = "";
var idxVideoPagina = "";
var urlVideo = "";

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
    let win= window.open("", urlVideo, "width=500, height=500");
    win.document.body.innerHTML=urlVideo;
}

$('#index').click(linkear);



var mostrarHtml = function () {

    var bibliotecaTable = "";

    $.each(objJSON.contenido[0].video, function (index, value) { //"<td>" + "</td>"
        //alert (index);
        //bibliotecaTable += "<div class='responsive'><div class='gallery' id ='" + index + "'><a  href='AulaVideo.html' onclick='alert('ooooola')'><img src='" + value.portada + "'></a></div></div>";
        bibliotecaTable += "<div class='responsive'><div class='gallery'><img id='"+index+"'class='imagen' src='" + value.portada + "' alt='"+ value.url +"'></div></div>";
    });

    $("#portadas").html("");
    $("#portadas").append(bibliotecaTable);


    $.each($("#portadas img.imagen"), function (i, v) {
        $(v).click(function (e) {
            urlVideo = $(e.target).attr("alt");
            indexVideo = $(e.target).attr("id");           
            var win= window.open("AulaVideo.html",urlVideo);

            //win.document.body.innerHTML=urlVideo;
            document.getElementById("urlVideo").innerHTML=urlVideo;
            document.getElementById("indexVideo").innerHTML=indexVideo;
            //win.document.body.innerHTML=urlVideo;
            
        });
    });
};
