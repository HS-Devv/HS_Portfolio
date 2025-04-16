const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const overlay = document.getElementById('image-overlay');
const overlayImg = document.getElementById('overlay-img');

// On page load, check localStorage for saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');

  // Swap images to dark versions on load
  document.querySelectorAll('img[data-dark]').forEach(img => {
    img.dataset.light = img.src;
    img.src = img.getAttribute('data-dark');
  });
}

// Toggle on click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Store the current theme
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  // Swap images
  document.querySelectorAll('img[data-dark]').forEach(img => {
    const lightSrc = img.src;
    const darkSrc = img.getAttribute('data-dark');
    if (body.classList.contains('dark-mode')) {
      img.dataset.light = lightSrc;
      img.src = darkSrc;
    } else {
      img.src = img.dataset.light;
    }
  });
});

// Click to enlarge
document.querySelectorAll('.image-wrapper img').forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.classList.remove('hidden');
  });
});

// Click to close
overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  overlayImg.src = '';
});