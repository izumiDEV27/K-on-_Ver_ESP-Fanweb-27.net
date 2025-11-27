//POR QUE ANDAS VIENDO EL CODIGO CHISMOSO HAHAH
// este js es muy basico, solo es para reproducir y ejecutar acciones de la web                                      

document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. Botones de Creadores ---
  const botones = document.querySelectorAll(".creadores");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const url = boton.getAttribute("data-url");
      window.open(url, "_blank");
    });
  });

  // ---Funcionalidad del Modal (Cerrar) ---
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const closeBtn = document.querySelector(".close");

  // Cierra el modal con el botón X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = ""; // limpia el iframe para detener el video
  });

  // Si  se hace click fuera del modal, también se cierra
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });

  // --- 3. Easter Egg (Koncitas) ---
  const konLogo = document.getElementById('kon-logo');
  const yuiFullscreen = document.getElementById('yui-fullscreen');

  konLogo.addEventListener('click', () => {
    yuiFullscreen.style.display = 'flex';
    
    setTimeout(() => {
      yuiFullscreen.style.display = 'none';
    }, 5000); // 5 segundos
  });

}); // <- FIN del DOMContentLoaded


// Abre el episodio en el modal
function openModal(url) {
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    
    // esta parte ve si la URL no está vacía
    if (url && modal && videoFrame) { 
        videoFrame.src = url; // asigna el link del capítulo
        modal.style.display = "flex"; // muestra el modal
    } else {
        alert("¡Este episodio aún no está disponible!");
    }
}

// Abre el enlace de descarga
function downloadEpisode(url) {
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("¡Aún no hay link de descarga!");
    }
}

// funcion aun no agregada, ya no recuerdo para que era xd, puedes borrarla
function openEpisode(url) {
    window.open(url, "_blank");
}