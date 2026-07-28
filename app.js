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
