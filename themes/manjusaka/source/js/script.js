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
  }

  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      localStorage.setItem('theme', 'dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
});

console.log('Manjusaka theme loaded');