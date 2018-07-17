
var objJSON = "";

$(function() {
    objJSON = leerArchivoJSON();
    objJSON = JSON.parse(datos);
    grabarArchivoJSON(datos);
});

var leerArchivoJSON = function () {
    var datos = localStorage.getItem("videos")
    if (datos === null) {
        datos = new Object();
        datos.contenido = [];
        localStorage.setItem("videos", JSON.stringify(datos));
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
        localStorage.setItem("videos", JSON.stringify(datos));
    } else {
        localStorage.setItem("videos", JSON.stringify(datos));
    }
}


//6. Crear y utilizar un método que permita exportar o mostrar la información de todo el JSON. 1pt
function exportJSON() {
    //var IEwindow = window.open();
    //IEwindow.document.write('sep=,\r\n' + JSON.stringify(objJSON));
    //IEwindow.document.close();
    //IEwindow.document.execCommand('SaveAs', true, "datos.json");
    //IEwindow.close();

    let dataStr = JSON.stringify(objJSON);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let exportFileDefaultName = 'datos.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}