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
        if (url.trim() !== '') {
            localStorage.setItem('watched_' + url, 'true');
            if (typeof applyWatchedStatus === 'function') applyWatchedStatus();
        }
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

//scuripto ura
async function cargarEpisodios() {
    const container = document.getElementById('episodes-container');
    
    try {
        // Cambia 'episodios.json' por la ruta real de tu archivo
        const response = await fetch('/ura-on/ura_chuushin.json');
        const episodios = await response.json();

        episodios.forEach(ep => {
            const card = document.createElement('div');
            card.className = 'episode-card'; // Mantiene tus estilos de CSS

            card.innerHTML = `
                <img src="${ep.imagen}" alt="Ep ${ep.id}">
                <h3>${ep.titulo}</h3>
                <p>${ep.descripcion}</p>
                <div class="buttons">
                    <button onclick="openModal('${ep.urlVer}')">Ver</button>
                    <button onclick="downloadEpisode('${ep.urlDescarga}')">Descargar</button>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error al cargar los episodios:", error);
    }
}

// Llama a la función cuando cargue el DOM
document.addEventListener("DOMContentLoaded", cargarEpisodios);
// --- LOGICA DE MODO OSCURO Y CAPITULOS VISTOS ---

// Aplicar estilos a capÃ­tulos vistos
function applyWatchedStatus() {
  const buttons = document.querySelectorAll('button[onclick^="openModal"]');
  buttons.forEach(btn => {
    const match = btn.getAttribute('onclick').match(/openModal\(['"]([^'"]+)['"]\)/);
    if (match && match[1]) {
      const url = match[1];
      if (localStorage.getItem('watched_' + url) === 'true') {
        const card = btn.closest('.episode-card');
        if (card) {
          card.classList.add('watched');
        }
      }
    }
  });
}

// Configurar BotÃ³n de Tema
function setupThemeToggle() {
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.innerHTML = 'ðŸŒ™ Modo Oscuro';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '20px'; // poner en bottom-left para que no tape los logos
  toggleBtn.style.left = '20px';
  toggleBtn.style.zIndex = '10000';
  toggleBtn.style.background = 'var(--primary)';
  toggleBtn.style.color = '#fff';
  toggleBtn.style.border = '2px solid #fff';
  toggleBtn.style.padding = '10px 15px';
  toggleBtn.style.borderRadius = '20px';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.fontWeight = 'bold';
  toggleBtn.style.boxShadow = '0 4px 12px #0002';
  
  document.body.appendChild(toggleBtn);

  // Check saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.innerHTML = 'â˜€ï¸ Modo Claro';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleBtn.innerHTML = 'â˜€ï¸ Modo Claro';
    } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.innerHTML = 'ðŸŒ™ Modo Oscuro';
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  // Un pequeÃ±o retraso para Ura-on que genera las cartas asincronamente
  setTimeout(applyWatchedStatus, 500); 
});
