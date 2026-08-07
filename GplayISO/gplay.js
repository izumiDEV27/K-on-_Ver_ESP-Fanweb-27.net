// Configurar Botón de Tema
function setupThemeToggle() {
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.innerHTML = '(─‿‿─) Activar Modo Oscuro';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '20px';
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
    toggleBtn.innerHTML = '( ͡❛ ω ͡❛) Activar Modo Claro';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleBtn.innerHTML = '( ͡❛ ω ͡❛) Activar Modo Claro';
    } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.innerHTML = '(─‿‿─) Activar Modo Oscuro';
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
});
