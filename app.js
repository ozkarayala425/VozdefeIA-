
function mostrarSeccion(seccion) {

    document.querySelectorAll(".seccion").forEach(function(div) {
        div.style.display = "none";
    });

    const elemento = document.getElementById(seccion);

    if (elemento) {
        elemento.style.display = "block";
    }
}
alert("APP.JS CARGADO");
