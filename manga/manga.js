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