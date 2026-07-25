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
        Génesis, Éxodo, Levítico, Números, Deuteronomio y los demás libros del Antiguo Testamento.
        </p>`;
    }

    else if(seccion === "nuevo"){
        contenido = `
        <h2>✝️ Nuevo Testamento</h2>
        <p>
        Mateo, Marcos, Lucas, Juan, Hechos, Romanos y las cartas del Nuevo Testamento.
        </p>`;
    }

    else if(seccion === "personajes"){
    contenido = `
    <h2>👥 Personajes Bíblicos</h2>

    <div class="biblioteca-card">
    <h3>👤 Moisés</h3>
    <p>${baseBiblica.moises.historia}</p>
    <p>📖 ${baseBiblica.moises.versiculo}</p>
    </div>

    <div class="biblioteca-card">
    <h3>✝️ Jesús</h3>
    <p>${baseBiblica.jesus.historia}</p>
    <p>📖 ${baseBiblica.jesus.versiculo}</p>
    </div>

    <div class="biblioteca-card">
    <h3>👑 David</h3>
    <p>${baseBiblica.david.historia}</p>
    <p>📖 ${baseBiblica.david.versiculo}</p>
    </div>

    <div class="biblioteca-card">
    <h3>🌊 Noé</h3>
    <p>${baseBiblica.noe.historia}</p>
    <p>📖 ${baseBiblica.noe.versiculo}</p>
    </div>

    <div class="biblioteca-card">
    <h3>⭐ Abraham</h3>
    <p>${baseBiblica.abraham.historia}</p>
    <p>📖 ${baseBiblica.abraham.versiculo}</p>
    </div>

    <div class="biblioteca-card">
    <h3>📜 Pablo</h3>
    <p>${baseBiblica.pablo.historia}</p>
    <p>📖 ${baseBiblica.pablo.versiculo}</p>
    </div>
    `;
    }

    else if(seccion === "historias"){
        contenido = `
        <h2>📖 Historias Bíblicas</h2>
        <p>
        La creación, Noé, Abraham, José, Moisés, David y las historias de la Biblia.
        </p>`;
    }

    else if(seccion === "temas"){
        contenido = `
        <h2>✨ Temas Bíblicos</h2>
        <p>
        Fe, oración, amor, perdón, esperanza y salvación.
        </p>`;
    }

    document.getElementById("contenidoBiblia").innerHTML = contenido;
}


function enviarMensaje(){

    let mensaje = document.getElementById("mensaje").value.toLowerCase();

    if(mensaje === ""){
        alert("Escribe una pregunta bíblica");
        return;
    }

    let respuesta = "Todavía estoy aprendiendo sobre ese tema bíblico.";

    if(mensaje.includes("moises") || mensaje.includes("moisés")){
        respuesta = baseBiblica.moises.historia +
        "<br><br>📖 Versículo: " + baseBiblica.moises.versiculo;
    }

    else if(mensaje.includes("jesus") || mensaje.includes("jesús")){
        respuesta = baseBiblica.jesus.historia +
        "<br><br>📖 Versículo: " + baseBiblica.jesus.versiculo;
    }

    else if(mensaje.includes("david")){
        respuesta = baseBiblica.david.historia +
        "<br><br>📖 Versículo: " + baseBiblica.david.versiculo;
    }


    let chat = document.getElementById("chat-box");

    chat.innerHTML += `
    <p><b>🙏 Tú:</b> ${mensaje}</p>
    <p><b>🤖 VozDeFeIA:</b><br>${respuesta}</p>
    <hr>
    `;


    document.getElementById("mensaje").value = "";

}
