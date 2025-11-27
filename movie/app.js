/* 
   ================================
   REPRODUCTOR DE GOOGLE DRIVE
   ================================
*/

// 1️⃣ URL de Google Drive (la pegas COMPLETA tal cual)
const linkDrive = "https://drive.google.com/file/d/15Xk9pa_B8uQPtPqIkh9zU8TILJ7vnaDY/view?usp=drive_link";


// 2️⃣ Función que transforma cualquier URL de Drive al formato /preview
function convertirDrive(link) {

    /* 
        Usamos una expresión regular para capturar el ID del archivo.

        De un link como:
        https://drive.google.com/file/d/ID_AQUI/view

        Extraemos solo el "ID_AQUI"
    */
    const match = link.match(/\/d\/(.*?)\//);

    if (!match) {
        console.error("❌ El enlace de Google Drive no es válido");
        return null;
    }

    const fileID = match[1];

    // Retornamos el formato que Google permite insertar en páginas web
    return `https://drive.google.com/file/d/${fileID}/preview`;
}


// 3️⃣ Convertimos automáticamente el link pegado arriba
const linkPreview = convertirDrive(linkDrive);


// 4️⃣ Insertamos el video dentro del iframe del reproductor
document.getElementById("drivePlayer").src = linkPreview;


/* 
   Listo. Esto permite:
   ✔ Pegar cualquier link de Drive
   ✔ El JS detecta el ID automáticamente
   ✔ Lo convierte a /preview
   ✔ Lo incrusta en el iframe como reproductor
*/
