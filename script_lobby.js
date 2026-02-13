// Abre el enlace de descarga o avisa si no, lo basico xd
function download_manga(url) {
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("¡Aún no hay link de descarga!");
    }
}
//que ves uwu >w< che cringe hahah
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
        // tamano de  (viewport)
        const anchoVentana = window.innerWidth;
        const altoVentana = window.innerHeight;

        // saco el tamaño de la imagen para que no se salga de la pantalla
        const anchoImagen = personaje.clientWidth;
        const altoImagen = personaje.clientHeight;

        // Calculamos una posición aleatoria (Math.random da un n° entre 0 y 1)
        // Restamos el tamaño de la imagen para que no quede cortada en los bordes xd
        const randomX = Math.random() * (anchoVentana - anchoImagen);
        const randomY = Math.random() * (altoVentana - altoImagen);

        // Aplicamos las nuevas coordenadas
        personaje.style.left = randomX + 'px';
        personaje.style.top = randomY + 'px';
    }

    // 1. Mover inmediatamente al cargar
    moverAleatoriamente();

    // 2. Repetir el movimiento cada 2000 milisegundos (2 segundos)
    // NOTA: Si cambio el tiempo en el CSS, debo cambiar aquí también para que coincidan.
    setInterval(moverAleatoriamente, 2000);
});
//que ves chismoso, hahahah, esta web es estatica, no me pidad milagros

//implementacion de scroll
function moverCarrusel(direccion) {
    const track = document.getElementById('track');
    // Obtenemos el ancho de un elemento para saber cuánto desplazar
    const anchoItem = track.querySelector('.carrusel-item').clientWidth;
    // Sumamos el gap (20px en el CSS) para que sea exacto
    const desplazamiento = anchoItem + 20; 

    // Mueve el scroll: direccion 1 es derecha, -1 es izquierda
    track.scrollBy({
        left: direccion * desplazamiento, 
        behavior: 'smooth' 
    });
}