
(function(){
    'use strict';
    console.log('Reading JS');
    /*-------------Light box Zoom-In -------------- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.popup-trigger').forEach(img => {
        img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        }
    });
     /*-------------scroll up button -------------- */
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