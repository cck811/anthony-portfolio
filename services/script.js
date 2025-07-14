(function () {
  'use strict';
  console.log('Reading JS');

  const scrollButton = document.getElementById('scroll-up-button');

  // Show button when user scrolls down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });

  // Scroll to top on click
  scrollButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  
})();