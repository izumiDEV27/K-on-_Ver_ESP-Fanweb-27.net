/**
 * 📚 Configuración de Capítulos / Volúmenes
 * 
 * Aquí puedes agregar los volúmenes del manga de K-ON!.
 * Solo necesitas subir tus PDFs a Google Drive y usar sus links aquí.
 * 
 * ¡TRUCO CRÍTICO PARA GOOGLE DRIVE!:
 * 1. Sube tu PDF a Google Drive y ponlo en "Cualquier persona con el enlace puede ver".
 * 2. Copia el enlace. Se verá algo así: https://drive.google.com/file/d/1ABCDEFG/view?usp=sharing
 * 3. Cambia la parte final "/view?usp=sharing" por "/preview".
 * 
 * Ejemplo correcto: "https://drive.google.com/file/d/1ABCDEFG/preview"
 */
const mangaCapitulos = [
    {
        titulo: "Volumen 1 - El inicio del Club",
        // Reemplaza esto con tu link real de Drive terminado en /preview
        driveLink: "https://drive.google.com/file/d/1n-eaw3O6kWD5PdAC4OoWKLD8zj-O2I7g/preview"
    },
    {
        titulo: "Volumen 2 - ¡Festival Cultural!",
        driveLink: "https://drive.google.com/file/d/1K3JrUBHxsemKoZxAA05owNEtTmiu9X_j/preview"
    },
    {
        titulo: "Volumen 3 - Nuevos miembros",
        driveLink: "https://drive.google.com/file/d/1KjYKnDDTNVGbaYb6zhW5Z_ojNkGWhVTd/preview"
    },
    {
        titulo: "Volumen 4 - Graduación",
        driveLink: "https://drive.google.com/file/d/1DU4-2yR8hz0YW1maZz_VdXzjSD8Ocb5u/preview"
    },
    {
        titulo: "Volumen 5 - college",
        driveLink: "https://drive.google.com/file/d/1Pf1V_D4yOplIMqVuiWr_CdpoY2a34Lfd/preview"
    }
];

// Elementos del DOM
const chapterList = document.getElementById('chapterList');
const placeholder = document.getElementById('placeholder');
const iframeWrapper = document.querySelector('.iframe-wrapper');
const pdfViewer = document.getElementById('pdfViewer');

/**
 * Función para crear la lista de capítulos en el menú lateral
 */
function renderizarCapitulos() {
    // Limpiamos la lista primero por si acaso
    chapterList.innerHTML = '';

    mangaCapitulos.forEach((cap, index) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        
        btn.className = 'chapter-btn';
        btn.innerHTML = `📖 ${cap.titulo}`;
        
        // Al hacer click, cargamos el PDF correspondiente
        btn.onclick = () => {
            seleccionarCapitulo(index);
        };

        li.appendChild(btn);
        chapterList.appendChild(li);
    });
}

/**
 * Lógica cuando el usuario hace clic en un capítulo
 */
function seleccionarCapitulo(index) {
    // 1. Quitar la clase 'active' de todos los botones
    const botones = document.querySelectorAll('.chapter-btn');
    botones.forEach(b => b.classList.remove('active'));
    
    // 2. Poner la clase 'active' al botón que se hizo clic
    botones[index].classList.add('active');

    // 3. Ocultar la pantalla de espera de Yui
    placeholder.style.display = 'none';
    
    // 4. Mostrar el Iframe
    iframeWrapper.style.display = 'block';

    // 5. Cargar el link de Google Drive en el Lector (Iframe)
    const link = mangaCapitulos[index].driveLink;
    pdfViewer.src = link;
}

// Iniciar la página renderizando la lista
document.addEventListener("DOMContentLoaded", () => {
    renderizarCapitulos();
});