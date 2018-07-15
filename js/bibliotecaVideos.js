var idxVideo = "";
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
    
   // alert('OK...')
    //let codigo =$('#tabla tr').find('td:eq(1)').text();
    let win= window.open("", urlVideo, "width=500, height=500");
    win.document.body.innerHTML=urlVideo;
}

$('#index').click(linkear);



var mostrarHtml = function () {

    var bibliotecaTable = "";

    $.each(objJSON.contenido[0].video, function (index, value) { //"<td>" + "</td>"
        //alert (index);
        //bibliotecaTable += "<div class='responsive'><div class='gallery' id ='" + index + "'><a  href='AulaVideo.html' onclick='alert('ooooola')'><img src='" + value.portada + "'></a></div></div>";
        bibliotecaTable += "<div class='responsive'><div class='gallery'><img class='imagen' src='" + value.portada + "' alt='"+ value.url +"'></div></div>";
    });

    $("#portadas").html("");
    $("#portadas").append(bibliotecaTable);


    $.each($("#portadas img.imagen"), function (i, v) {
        $(v).click(function (e) {
            urlVideo = $(e.target).attr("alt");
            var win= window.open("AulaVideo.html",urlVideo);
            //win.document.body.innerHTML=urlVideo;
            document.getElementById("urlVideo").innerHTML=urlVideo;
            //win.document.body.innerHTML=urlVideo;
            
        });
    });


    $("#paginas1").click(function (e) {
    });

    $.each($("#demo1 tbody a.edt"), function (i, v) {
        $(v).click(function (e) {
            var id = $(e.target).attr("value");
            idxVideo = id;

            var video = objJSON.contenido[0].video[id];
            idxVideoPagina = 0;
 
            var v = video.paginas[idxVideoPagina];

            visualizarPagina(v);

            return false;
        });
    });

    $("#demo1 tbody a.del").click(function (e) {
        return false;
    });
}

var plusDivs = function (desp) {
    var video = objJSON.contenido[0].video[idxVideo];
    var idx = idxVideoPagina;

    var next = idx + desp;
    if (!(next < 0 || next >= video.paginas.length)) {
        idxVideoPagina = next;
        var v = video.paginas[idxVideoPagina];
        visualizarPagina(v);
    }
}


var visualizarPagina = function (v) {
    var video = objJSON.contenido[0].video[idxVideo];
    $("#paginas1").html("");

    var pagina1 = [];

    // Historia
    pagina1.push("<div class='pag'>");
    pagina1.push("<span style='width:100px;'>");
    pagina1.push(v.historia);
    pagina1.push("</span>");

    pagina1.push("<img class='img' src='");
    pagina1.push(v.foto);
    pagina1.push("' />");
    pagina1.push("</div>");

    // Audio
    pagina1.push("<div>");
    pagina1.push("<audio controls=''><source src='");
    pagina1.push(v.audio);
    pagina1.push("' type='audio/mpeg'></audio>");

    pagina1.push("</div><br />");

    // Paginacion
    pagina1.push('<div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">');

    if (idxVideoPagina !== 0) {
        pagina1.push('<div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>');
    } else {
        pagina1.push('<div class="w3-left" style="color:#777;">&#10094;</div>');
    }


    if (idxVideoPagina !== video.paginas.length - 1) {
        pagina1.push('<div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>');
    } else {
        pagina1.push('<div class="w3-right w3-hover-text-khaki" onclick="mostrarPreguntas()">Preguntas</div>');
    }

    pagina1.push('</div>');

    $("#paginas1").append(pagina1.join(""));
};


var mostrarPreguntas = function () {
    var video = objJSON.contenido[0].video[idxVideo];
    var v = video.preguntas[0];
    $("#paginas1").html("");

    var pagina1 = [];

    // Historia
    pagina1.push("<div class='pag'>");
    pagina1.push("<span style='width:100px;'>");
    pagina1.push(v.pregunta);
    pagina1.push("</span>");
    pagina1.push("<br />");

    $.each(v.opciones, function (i, w) {
        pagina1.push("<input type='radio' id='opc-" + i + "' name='opciones' value='");
        pagina1.push(i + 1);
        pagina1.push("' />");
        pagina1.push("<label for='opc-" + i + "'>");
        pagina1.push(w.opcion);
        pagina1.push("</label>");
        pagina1.push("<br />");
    });
    pagina1.push("</div>");

    pagina1.push("<br />");

    // Paginacion
    pagina1.push('<div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">');

    pagina1.push('<div class="w3-right w3-hover-text-khaki" onclick="mostrarResultado()">Resultado</div>');

    pagina1.push('</div>');

    $("#paginas1").append(pagina1.join(""));
};

var mostrarResultado = function () {
    var video = objJSON.contenido[0].video[idxVideo];
    var v = video.preguntas[0];

    var resp = $("#paginas1 input[name='opciones']:checked").val();

    if (typeof resp === "undefined") {
        alert("Cuál es la respuesta correcta?");
        return;
    }

    if (v.respuesta === parseInt(resp,10)) {
        alert("Felicidades!!");
    } else {
        alert("Noooo!! La respuesta es: " + v.opciones[v.respuesta-1].opcion);
    }

    $("#paginas1").html("");
};

