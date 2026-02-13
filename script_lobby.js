// Abre el enlace de descarga o avisa si no, lo basico xd
function download_manga(url) {
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("¡Aún no hay link de descarga!");
    }
}

function ver_manga(url) {
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("¡Aún no hay link de descarga!");
    }
}

// parte de mensaje emergente del codigo
const popupOverlay = document.getElementById('popupOverlay');
        const closeBtn = document.getElementById('closePopup');

        closeBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'none'; // Oculta el pop-up
        });

        // Opcional: cerrar también al hacer click fuera de la caja
        popupOverlay.addEventListener('click', (e) => {
            if(e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });

document.addEventListener('DOMContentLoaded', () => {
    const personaje = document.querySelector('.personaje-flotante');

    function moverAleatoriamente() {
        // Obtenemos el tamaño de la ventana (viewport)
        const anchoVentana = window.innerWidth;
        const altoVentana = window.innerHeight;

        // Obtenemos el tamaño de la imagen para que no se salga de la pantalla
        const anchoImagen = personaje.clientWidth;
        const altoImagen = personaje.clientHeight;

        // Calculamos una posición aleatoria (Math.random da un n° entre 0 y 1)
        // Restamos el tamaño de la imagen para que no quede cortada en los bordes
        const randomX = Math.random() * (anchoVentana - anchoImagen);
        const randomY = Math.random() * (altoVentana - altoImagen);

        // Aplicamos las nuevas coordenadas
        personaje.style.left = randomX + 'px';
        personaje.style.top = randomY + 'px';
    }

    // 1. Mover inmediatamente al cargar
    moverAleatoriamente();

    // 2. Repetir el movimiento cada 2000 milisegundos (2 segundos)
    // NOTA: Si cambias el tiempo en el CSS, cámbialo aquí también para que coincidan.
    setInterval(moverAleatoriamente, 2000);
});