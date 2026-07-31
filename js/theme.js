document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // 1. Obtener el tema guardado previamente o detectar la preferencia del sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Determinar el tema inicial
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  // Aplicar tema inicial al cargar la página
  applyTheme(currentTheme);

  // 2. Evento Clic en el botón
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      // Alternar entre light y dark
      currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      
      // Aplicar y guardar
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  }

  // Función encargada de cambiar el atributo y el icono del botón
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Cambiar icono según el modo
    if (themeToggleBtn) {
      themeToggleBtn.textContent = (theme === 'dark') ? '☀️' : '🌙';
    }
  }
});