// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
  var themeToggleBtn = document.getElementById('theme-toggle');
  var icon = themeToggleBtn.querySelector('i');
  
  // Check local storage
  var currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    updateGiscusTheme('light');
  } else {
    updateGiscusTheme('dark');
  }

  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      updateGiscusTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      updateGiscusTheme('dark');
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