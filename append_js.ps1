$jsContent = @"

// --- LOGICA DE MODO OSCURO Y CAPITULOS VISTOS ---

// Aplicar estilos a capítulos vistos
function applyWatchedStatus() {
  const buttons = document.querySelectorAll('button[onclick^=`"openModal`"]');
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

// Configurar Botón de Tema
function setupThemeToggle() {
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.innerHTML = '🌙 Modo Oscuro';
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
    toggleBtn.innerHTML = '☀️ Modo Claro';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleBtn.innerHTML = '☀️ Modo Claro';
    } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.innerHTML = '🌙 Modo Oscuro';
    }
  });
}

document.addEventListener(`"DOMContentLoaded`", () => {
  setupThemeToggle();
  // Un pequeño retraso para Ura-on que genera las cartas asincronamente
  setTimeout(applyWatchedStatus, 500); 
});
"@

Add-Content -Path "temporada1\script_view.js" -Value $jsContent -Encoding UTF8
Add-Content -Path "t3mp0rada2\t3mp2.js" -Value $jsContent -Encoding UTF8
Add-Content -Path "ura-on\ura-0n.js" -Value $jsContent -Encoding UTF8
