
const linkDrive = "https://drive.google.com/file/d/15Xk9pa_B8uQPtPqIkh9zU8TILJ7vnaDY/view?usp=sharing";



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

   
    return `https://drive.google.com/file/d/${fileID}/preview`;
}



const linkPreview = convertirDrive(linkDrive);



document.getElementById("drivePlayer").src = linkPreview;
