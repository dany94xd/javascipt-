var datos = '{"video":[{"id":"1","titulo":"VISITA A LA GRANJA","descripcion":"Recreación y reconocimiento de los animales","creditos":" creado por: HECTOR LUIS","preguntas":[{"id":"1","pregunta":"¿Qué animal es el que ladra","opciones":[{"id":"1","imagen":"perro","foto":"recursos/videos/imagenes/imagen_1_1_1.jpg"},{"id":"2","imagen":"gato","foto":"recursos/videos/imagenes/imagen_2_1_1.jpg"}],"respuesta":"1"},{"id":"1","pregunta":"¿Qué animal hace beeeeee","imagenes":[{"id":"1","imagen":"vaca","foto":"recursos/videos/imagenes/imagen_1_2_1.jpg"},{"id":"2","imagen":"oveja","foto":"recursos/videos/imagenes/imagen_2_2_1.jpg"}],"respuesta":"2"}]},{"id":"2","titulo":"VISITA A LA GRANJA - COPIA","descripcion":"Recreación y reconocimiento de los animales","creditos":" creado por: HECTOR LUIS","preguntas":[{"id":"1","pregunta":"¿Qué animal es el que ladra","opciones":[{"id":"1","imagen":"perro","foto":"recursos/videos/imagenes/imagen_1_1_2.jpg"},{"id":"2","imagen":"gato","foto":"recursos/videos/imagenes/imagen_2_1_2.jpg"}],"respuesta":"1"},{"id":"1","pregunta":"¿Qué animal hace beeeeee","imagenes":[{"id":"1","imagen":"vaca","foto":"recursos/videos/imagenes/imagen_1_2_2.jpg"},{"id":"2","imagen":"oveja","foto":"recursos/videos/imagenes/imagen_2_2_2.jpg"}],"respuesta":"2"}]}]}';

////////////////////////////////////////////////////////////////////////////////////////////////////
var objJSON = "";

$(function() {
    objJSON = leerArchivoJSON();
   //objJSON = JSON.parse(datos);
   grabarArchivoJSON(datos);
});

var leerArchivoJSON = function () {
    var datos = localStorage.getItem("video")
    if (datos === null) {
        datos = new Object();
        datos.contenido = [];

        localStorage.setItem("video", JSON.stringify(datos));
    } else {
        datos = JSON.parse(datos);
        if (typeof datos === "string") datos = JSON.parse(datos);
    }
    return datos;
}

var grabarArchivoJSON = function (datos) {
    if (datos === null) {
        datos = new Object();
        datos.contenido = [];
        datos.contenido[0] = new Object();
        datos.contenido[0].video = [];
        //alert(datos.contenido[0].cuento);
        localStorage.setItem("videos", JSON.stringify(datos));
    } else {
        localStorage.setItem("videos", JSON.stringify(datos));
    }
}


//6. Crear y utilizar un método que permita exportar o mostrar la información de todo el JSON. 1pt
function exportJSON() {
    var IEwindow = window.open();
    IEwindow.document.write('sep=,\r\n' + JSON.stringify(objJSON));
    IEwindow.document.close();
    IEwindow.document.execCommand('SaveAs', true, "datos.json");
    IEwindow.close();

    let dataStr = JSON.stringify(objJSON);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

//========================================================================================
var idxCuento = "";

/*Funcion inicial al cargar la pagina*/
$(function () {
    
    mostrar();

    nuevo();
    
    $("#nuevo").click(function (e) {
        nuevo();
        return false;
    });

    $("#guardar").click(function (e) {
        var obj;
        if (idxCuento === "") {
            obj = new Object();
        } else {
            obj = objJSON.contenido[0].video[idxCuento];
        }

        obj.codigo = $("#codigo").val();
        obj.titulo = $("#titulo").val();
        obj.descripcion = $("#descripcion").val();
        obj.creditos = $("#creditos").val();



        var paginas = [];
        $.each($("#paginas div"), function (i, v) {
            var pagina = new Object();
            pagina.id = "";
            pagina.historia = $(v).find("textarea.hst").val();
            pagina.foto = $(v).find("img.img").attr("src");
            pagina.audio = "";

            paginas.push(pagina);
        });

        obj.paginas = paginas;


        if (datos.estado === "A") {
            // Validaciones
            if (!(datos.id)) {
                alert("Debe ingresar el código del cuento.");
                return;
            }
            if (paginas.length === 0) {
                alert("Debe ingresar las paginas");
                return false;
            }
        }

        if (idxCuento === "") {
            objJSON.contenido[0].video.push(obj);
        }

        grabarArchivoJSON(objJSON);

        mostrar();

        nuevo();
        console.log(objJSON);
        return false;
    });

    $("#cancelar").click(function (e) {
        nuevo();
        return false;
    });

    $("#exportar").click(function (e) {
        exportJSON();
        return false;
    });

});


    


var mostrar = function () {
    alert(objJSON);
    $.each($("#tabs a"), function (i, v) {
        $(v).click(function (e) {
            var tabindex = $(e.target).attr("tabindex");
            $(".tab:not(hid)").addClass("hid");
            $("#tab-" + tabindex).removeClass("hid");
            return false;
        });
    });

    var stefaniaTable = "";

    $.each(objJSON.contenido[0].video, function (index, value) { //"<td>" + "</td>"
        stefaniaTable += "<tr id='c" + index + "'><td>" + value.id + "</td>" + "<td>" + value.titulo + "</td>" + "<td>" + value.descripcion + "</td>" + "<td>" + value.creditos + "</td>" +
            "<td><a href='#' class='edt' value='" + index + "'>Editar</a></td><td><a href='#' class='del' value='" + index + "'>Eliminar</a></td><tr>";
    });

    $("#demo tbody").html("");
    $("#demo tbody").append(stefaniaTable);

    $.each($("#demo tbody a.edt"), function (i, v) {
        $(v).click(function (e) {
            var id = $(e.target).attr("value");
            idxCuento = id;

            var cuento = objJSON.contenido[0].video[id];
            $("#codigo").val(cuento.id);
            $("#titulo").val(cuento.titulo);
            $("#creditos").val(cuento.creditos);
            $("#descripcion").val(cuento.descripcion);
            //$("#foto_principal").val(cuento.foto_principal);
          
          /*  if (cuento.estado) {
                if (cuento.estado === "A")
                    $("#estadoA").prop("checked", "checked");
                else
                    $("#estadoI").prop("checked", "checked");
            } else {
                $("#estadoI").prop("checked", "checked");
            }*/

            $("#paginas").html("");
            $.each(cuento.paginas, function (i, v) {
                var pagina = [];
                pagina.push("<div>");
                pagina.push("Historia:");
                pagina.push("<textarea class='hst'>");
                pagina.push(v.historia);
                pagina.push("</textarea>");
                pagina.push("<br />");
                pagina.push("Imagen:");
                pagina.push("<img class='img' src='");
                pagina.push(v.foto);
                pagina.push("' />");
        pagina.push("<br />");
                pagina.push("Audio:");
                pagina.push("<audio class='img' src='");
                pagina.push(v.audio);
                pagina.push("' />");
                pagina.push("</div>");
        
                $("#paginas").append(pagina.join(""));
            });

            return false;
        });
    });

    $("#demo tbody a.del").click(function (e) {
        var id = $(e.target).attr("value");
        idxCuento = id;

        //var cuento = objJSON.contenido[0].cuento[id];
        objJSON.contenido[0].video.splice(id, 1);

        grabarArchivoJSON(objJSON);

        mostrar();

        return false;
    });
}


var nuevo = function () {
    idxCuento = "";
    $("#codigo").val("");
    $("#titulo").val("");
    $("#descripcion").val("");
    $("#creditos").val("");
    $("#paginas").html("");
};


