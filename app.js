function mostrarSeccion(seccion){

    document.querySelectorAll(".seccion").forEach(function(div){
        div.style.display = "none";
    });

    document.getElementById(seccion).style.display = "block";
}
function mostrarContenidoBiblia(seccion){

    let contenido = "";

    if(seccion === "antiguo"){
        contenido = `
        <h2>📜 Antiguo Testamento</h2>
        <p>
        Génesis, Éxodo, Levítico, Números, Deuteronomio... 
        </p>`;
    }

    if(seccion === "nuevo"){
        contenido = `
        <h2>✝️ Nuevo Testamento</h2>
        <p>
        Mateo, Marcos, Lucas, Juan, Hechos...
        </p>`;
    }

    if(seccion === "personajes"){
        contenido = `
        <h2>👥 Personajes Bíblicos</h2>
        <p>
        Jesús, Moisés, David, Abraham, Pablo...
        </p>`;
    }

    if(seccion === "historias"){
        contenido = `
        <h2>📖 Historias Bíblicas</h2>
        <p>
        La creación, Noé, David y Goliat, Daniel...
        </p>`;
    }

    if(seccion === "temas"){
        contenido = `
        <h2>✨ Temas Bíblicos</h2>
        <p>
        Fe, oración, amor, perdón y esperanza.
        </p>`;
    }

    document.getElementById("contenidoBiblia").innerHTML = contenido;
}
mostrarContenidoBiblia()

function mostrarContenidoBiblia(seccion){

    let contenido = "";

    if(seccion === "antiguo"){
        contenido = `
        <h2>📜 Antiguo Testamento</h2>
        <p>
        Génesis, Éxodo, Levítico, Números y Deuteronomio.
        </p>`;
    }

    if(seccion === "nuevo"){
        contenido = `
        <h2>✝️ Nuevo Testamento</h2>
        <p>
        Mateo, Marcos, Lucas, Juan y Hechos.
        </p>`;
    }

    if(seccion === "personajes"){
        contenido = `
        <h2>👥 Personajes Bíblicos</h2>
        <p>
        Jesús, Moisés, David, Abraham y Pablo.
        </p>`;
    }

    if(seccion === "historias"){
        contenido = `
        <h2>📖 Historias Bíblicas</h2>
        <p>
        La creación, Noé, David y Goliat, Daniel.
        </p>`;
    }

    if(seccion === "temas"){
        contenido = `
        <h2>✨ Temas Bíblicos</h2>
        <p>
        Fe, oración, amor, perdón y esperanza.
        </p>`;
    }

    document.getElementById("contenidoBiblia").innerHTML = contenido;
}
function pruebaVozDeFeIA(){
    alert("✅ VozDeFeIA está conectado correctamente con app.js");
}
