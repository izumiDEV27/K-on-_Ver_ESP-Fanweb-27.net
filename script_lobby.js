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

// parte de mensaje emergente codigo xd
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closePopup');

// Si ya lo cerró antes, no mostrarlo
if (localStorage.getItem("popupVisto")) {
    popupOverlay.style.display = "none";
}
closeBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    localStorage.setItem("popupVisto", "true");
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
        localStorage.setItem("popupVisto", "true");
    }
});
const version = "1.0.7";//actualizar cada vez que agrege algo
if (localStorage.getItem("popupVersion") !== version) {
    popupOverlay.style.display = "flex";
} else {
    popupOverlay.style.display = "none";
}

localStorage.setItem("popupVersion", version);
//fin

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
//mahou no modo, kore wa centa no data
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-principal');

    // Función para cargar el JSON
    fetch('ChuushinGlobal.json')
        .then(response => response.json())
        .then(data => {
            renderizarTarjetas(data.secciones);
        })
        .catch(error => console.error('Error cargando el contenido:', error));

    function renderizarTarjetas(items) {
        items.forEach(item => {
            // Creamos la estructura de la tarjeta que ya tienes en tu CSS
            const card = document.createElement('a');
            card.href = item.link;
            card.className = 'card';

            // Generamos los tags si existen
            const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            card.innerHTML = `
                <img src="${item.imagen}" alt="Portada ${item.titulo}">
                <div class="card-content">
                    <h3>${item.titulo}</h3>
                    <div class="tags-container">
                        ${tagsHTML}
                    </div>
                </div>
            `;
            
            contenedor.appendChild(card);
        });
    }
});
