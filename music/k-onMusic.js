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
