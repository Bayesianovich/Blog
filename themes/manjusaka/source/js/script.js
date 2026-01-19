// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
  var themeToggleBtn = document.getElementById('theme-toggle');
  var icon = themeToggleBtn.querySelector('i');
  
  // Check local storage
  var savedTheme = localStorage.getItem('theme');
  var isDark = false;

  if (savedTheme) {
    isDark = savedTheme === 'dark';
  } else {
    isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Apply theme
  if (!isDark) {
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    updateGiscusTheme('light');
  } else {
    document.documentElement.classList.remove('light-mode');
    document.documentElement.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    updateGiscusTheme('dark');
  }

  themeToggleBtn.addEventListener('click', function() {
    var isLight = document.body.classList.contains('light-mode');
    
    if (isLight) {
      // Switch to Dark
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      updateGiscusTheme('dark');
    } else {
      // Switch to Light
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      updateGiscusTheme('light');
    }
  });
});

function updateGiscusTheme(themeMode) {
  var iframe = document.querySelector('iframe.giscus-frame');
  if (!iframe) return;
  
  var theme = themeMode === 'light' ? 'light' : 'dark_dimmed'; // 'dark_dimmed' matches your site better than 'dark'
  
  iframe.contentWindow.postMessage({
    giscus: {
      setConfig: {
        theme: theme
      }
    }
  }, 'https://giscus.app');
}

console.log('Manjusaka theme loaded');