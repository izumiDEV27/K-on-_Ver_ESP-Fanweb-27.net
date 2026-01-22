// Abre el enlace de descarga
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