function mostrarSeccion(seccion){

    document.querySelectorAll(".seccion").forEach(function(div){
        div.style.display = "none";
    });

    document.getElementById(seccion).style.display = "block";
}
