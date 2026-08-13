function enviarMensaje() {

    const campo = document.getElementById("mensaje");
    const chat = document.getElementById("chat-box");

    if (!campo || !chat) {
        return;
    }

    const textoOriginal = campo.value.trim();

    if (textoOriginal === "") {
        alert("Escribe una pregunta bíblica");
        return;
    }

    const pregunta = textoOriginal
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let respuesta = "Todavía estoy aprendiendo sobre ese tema bíblico. 📖";

    if (pregunta.includes("moises")) {
        respuesta = `
            Moisés fue llamado por Dios para sacar al pueblo de Israel
            de la esclavitud en Egipto. Dios habló con él desde la
            zarza ardiente y lo utilizó para liberar a Israel.
            <br><br>
            📖 <b>Éxodo 3:10</b>
        `;
    }

    else if (pregunta.includes("jesus") ||
             pregunta.includes("cristo")) {

        respuesta = `
            Jesús es el Hijo de Dios y el Salvador del mundo.
            Predicó el Reino de Dios, realizó milagros,
            murió en la cruz por nuestros pecados y resucitó.
            <br><br>
            📖 <b>Juan 3:16</b>
        `;
    }

    else if (pregunta.includes("david")) {

        respuesta = `
            David fue rey de Israel. Antes de ser rey fue pastor
            y venció al gigante Goliat confiando en Dios.
            También escribió muchos de los Salmos.
            <br><br>
            📖 <b>1 Samuel 17</b>
        `;
    }

    else if (pregunta.includes("pedro")) {

        respuesta = `
            Pedro fue uno de los doce discípulos de Jesús
            y tuvo un papel importante en la iglesia primitiva.
            <br><br>
            📖 <b>Mateo 16:18</b>
        `;
    }

    else if (pregunta.includes("pablo")) {

        respuesta = `
            Pablo fue un apóstol que predicó el evangelio
            a muchas naciones y escribió varias cartas
            del Nuevo Testamento.
            <br><br>
            📖 <b>Hechos 9:15</b>
        `;
    }

    else if (pregunta.includes("noe") ||
             pregunta.includes("arca")) {

        respuesta = `
            Noé fue un hombre justo que caminó con Dios.
            Por obediencia construyó el arca antes del diluvio.
            <br><br>
            📖 <b>Génesis 6:9</b>
        `;
    }

    else if (pregunta.includes("abraham")) {

        respuesta = `
            Abraham fue llamado por Dios para ser padre
            de muchas naciones. Creyó en las promesas de Dios
            y es un gran ejemplo de fe.
            <br><br>
            📖 <b>Génesis 12:1-2</b>
        `;
    }


    chat.innerHTML += `
        <div class="mensaje-usuario">
            <b>🙏 Tú:</b>
            <p>${textoOriginal}</p>
        </div>

        <div class="mensaje-ia">
            <b>🤖 VozDeFeIA:</b>
            <p>${respuesta}</p>
        </div>

        <hr>
    `;

    campo.value = "";

    campo.focus();
}
