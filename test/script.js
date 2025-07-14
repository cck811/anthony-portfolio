(function(){
    'use strict';
    console.log('Reading JS');
    document.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset;
        var clouds = document.querySelectorAll('.cloud');
        
        clouds.forEach(function(cloud, index) {
          var movement = (scrollPosition * 0.7) - (index * 50) % window.innerWidth;
          cloud.style.transform = 'translateX(' + movement + 'px)';
        });
    });
  /*----------------------2-----------------------*/
  document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) updateCount();
    }, { threshold: 1 });

    observer.observe(counter);
  });
  });
    /*---------------------- 3 -----------------------*/
const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

serviceCards.forEach(card => observer.observe(card));


})();