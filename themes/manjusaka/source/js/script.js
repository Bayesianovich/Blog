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

// Back to Top Button Logic
document.addEventListener('DOMContentLoaded', function() {
  var backToTopBtn = document.getElementById('back-to-top');
  
  if (backToTopBtn) {
    // Show/Hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
/* --- UI Polish & Functional Components JS --- */

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Image Fade-in
  var images = document.querySelectorAll('img');
  images.forEach(function(img) {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        img.classList.add('loaded');
      });
    }
  });

  // 2. Reading Progress Bar
  var progressBar = document.getElementById('reading-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrollPercent = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    });
  }

  // 3. Code Block Copy Button & Mac Style
  var highlightBlocks = document.querySelectorAll('.highlight, pre');
  highlightBlocks.forEach(function(block) {
    // Check if copy button already exists to avoid duplicates
    if (block.querySelector('.copy-btn')) return;

    // Check if this is a nested block (e.g., pre inside highlight)
    // If block parent is also a highlight block, skip this one
    if (block.parentElement.classList.contains('highlight')) return;

    // Add Copy Button
    var btn = document.createElement('div');
    btn.className = 'copy-btn';
    btn.innerHTML = '<i class="far fa-copy"></i>';
    btn.title = 'Copy Code';
    
    btn.addEventListener('click', function() {
      var code = block.querySelector('td.code') ? block.querySelector('td.code').innerText : block.innerText;
      navigator.clipboard.writeText(code).then(function() {
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(function() {
          btn.innerHTML = '<i class="far fa-copy"></i>';
        }, 2000);
      });
    });
    
    block.appendChild(btn);
  });

  // 4. TOC Active Highlighting
  var tocLinks = document.querySelectorAll('.toc-link');
  var headers = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3, .post-content h4');
  
  if (tocLinks.length > 0 && headers.length > 0) {
    var scrollSpy = function() {
      var fromTop = window.scrollY + 100;
      
      var currentHeader = null;
      headers.forEach(function(header) {
        if (header.offsetTop <= fromTop) {
          currentHeader = header;
        }
      });
      
      if (currentHeader) {
        var id = currentHeader.id || currentHeader.getAttribute('id');
        // Hexo's toc helper uses encoded IDs sometimes, need to match safely
        if(id) {
           tocLinks.forEach(function(link) {
             link.classList.remove('active');
             link.parentElement.classList.remove('active');
             if (decodeURIComponent(link.getAttribute('href')).substring(1) === id) {
               link.classList.add('active');
               link.parentElement.classList.add('active');
             }
           });
        }
      }
    };
    
    window.addEventListener('scroll', scrollSpy);
  }
});
