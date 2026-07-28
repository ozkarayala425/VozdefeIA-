console.log("app.js cargado correctamente");
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
        Génesis, Éxodo, Levítico, Números, Deuteronomio y todos los libros del Antiguo Testamento.
        </p>
        `;

    }


    else if(seccion === "nuevo"){

        contenido = `
        <h2>✝️ Nuevo Testamento</h2>
        <p>
        Mateo, Marcos, Lucas, Juan, Hechos y las cartas del Nuevo Testamento.
        </p>
        `;

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
        La creación, Noé, Abraham, José, Moisés, David y muchas historias más.
        </p>
        `;

    }


    else if(seccion === "temas"){

        contenido = `
        <h2>✨ Temas Bíblicos</h2>
        <p>
        Fe, oración, amor, perdón, esperanza y salvación.
        </p>
        `;

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


    for (let personaje in baseBiblica) {

    let datos = baseBiblica[personaje];

    if (datos.palabras) {

        for (let palabra of datos.palabras) {

            if (mensaje.includes(palabra)) {

                respuesta =
                    datos.historia +
                    "<br><br>📖 Versículo: " +
                    datos.versiculo;

                break;
            }
        }
    }

    if (respuesta !== "Todavía estoy aprendiendo sobre ese tema bíblico.") {
        break;
    }
    }



    let chat = document.getElementById("chat-box");


    chat.innerHTML += `

    <p><b>🙏 Tú:</b> ${mensaje}</p>

    <p><b>🤖 VozDeFeIA:</b><br>${respuesta}</p>

    <hr>

    `;


    let mensaje = document.getElementById("mensaje").value
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");
