// 📦 Variables globales del visor
let pdfDoc = null;      // documento PDF cargado
let paginaActual = 1;   // página actual
let escala = 1.5;       // zoom

const canvas = document.getElementById("pdf-render");
const ctx = canvas.getContext("2d");

// 📂 Abrir PDF
function abrirPDF(url) {
    document.getElementById("visorModal").style.display = "block";

    // 🔄 Reinicia a página 1 cada vez
    paginaActual = 1;

    // 📥 Cargar PDF
    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdfDoc = pdf;
        renderizarPagina(paginaActual);
    });
}

// ❌ Cerrar visor
function cerrarPDF() {
    document.getElementById("visorModal").style.display = "none";
    pdfDoc = null;
}

// 🖼️ Renderizar página
function renderizarPagina(num) {

    // 📖 Obtener página
    pdfDoc.getPage(num).then(page => {

        // 📐 Definir viewport (tamaño + zoom)
        const viewport = page.getViewport({ scale: escala });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // 🎨 Renderizar en canvas
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        page.render(renderContext);

        // 🔢 Actualizar texto de página
        document.getElementById("pagina-info").textContent =
            `Página ${num} de ${pdfDoc.numPages}`;
    });
}

// ⬅ Página anterior
function paginaAnterior() {
    if (paginaActual <= 1) return;
    paginaActual--;
    renderizarPagina(paginaActual);
}

// ➡ Página siguiente
function paginaSiguiente() {
    if (paginaActual >= pdfDoc.numPages) return;
    paginaActual++;
    renderizarPagina(paginaActual);
}