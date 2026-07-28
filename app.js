alert("app.js cargó");
console.log("VozDeFeIA app.js funcionando");


function mostrarSeccion(seccion){

    document.querySelectorAll(".seccion").forEach(function(div){

        div.style.display = "none";

    });

    let abrir = document.getElementById(seccion);

    if(abrir){
        abrir.style.display = "block";
    }

}



function mostrarContenidoBiblia(seccion){

    let contenido = "";

    if(seccion === "antiguo"){

        contenido = `
        <h2>📜 Antiguo Testamento</h2>
        <p>
        Génesis, Éxodo, Levítico, Números, Deuteronomio y los libros del Antiguo Testamento.
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

        <p>Explora personajes desde la base bíblica.</p>

        `;

        for(let personaje in baseBiblica){

            contenido += `
            <div class="biblioteca-card">
            <h3>${baseBiblica[personaje].nombre}</h3>
            <p>${baseBiblica[personaje].historia}</p>
            <p>📖 ${baseBiblica[personaje].versiculo}</p>
            </div>
            `;

        }

    }


    else if(seccion === "historias"){

        contenido = `
        <h2>📖 Historias Bíblicas</h2>
        <p>Historias de fe, obediencia y esperanza.</p>
        `;

    }


    else if(seccion === "temas"){

        contenido = `
        <h2>✨ Temas Bíblicos</h2>
        <p>Fe, oración, amor, perdón y salvación.</p>
        `;

    }


    let zona = document.getElementById("contenidoBiblia");

    if(zona){

        zona.innerHTML = contenido;

    }

}



function enviarMensaje(){


    let mensaje = document.getElementById("mensaje").value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");


    if(mensaje === ""){

        alert("Escribe una pregunta bíblica");

        return;

    }


    let respuesta = "Todavía estoy aprendiendo sobre ese tema bíblico.";


    for(let personaje in baseBiblica){


        let datos = baseBiblica[personaje];


        if(datos.palabras){


            for(let palabra of datos.palabras){


                if(mensaje.includes(palabra)){


                    respuesta =
                    datos.historia +
                    "<br><br>📖 Versículo: " +
                    datos.versiculo;


                    break;

                }

            }


        } else {


            if(mensaje.includes(personaje)){


                respuesta =
                datos.historia +
                "<br><br>📖 Versículo: " +
                datos.versiculo;


                break;

            }

        }


        if(respuesta !== "Todavía estoy aprendiendo sobre ese tema bíblico."){

            break;

        }


    }



    let chat = document.getElementById("chat-box");


    chat.innerHTML += `

    <p><b>🙏 Tú:</b> ${mensaje}</p>

    <p><b>🤖 VozDeFeIA:</b><br>${respuesta}</p>

    <hr>

    `;


    document.getElementById("mensaje").value = "";

}
