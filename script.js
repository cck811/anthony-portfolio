
(function(){
    'use strict';
    console.log('Reading JS');

    /*---highlight page section scrolldown fade--- */
    document.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const triggerHeight = document.documentElement.scrollHeight / 2; // Mid-point of the page
        const scrollRatio = Math.min(1, (scrollTop / triggerHeight) * 2); // Ensures full opacity at halfway scroll
    
        const backgroundColor = `rgba(0, 0, 0, ${scrollRatio})`; // Transition to black based on scroll position
        document.getElementById('fade-overlay').style.backgroundColor = backgroundColor;
    });

    
    /*---In view effect--- */

    document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, {
            threshold: 0.5 // Adjust to trigger the class change earlier or later
        });
        const highlightItems = document.querySelectorAll('.highlight-section-item');
        highlightItems.forEach(item => observer.observe(item));

        const expertiseItems = document.querySelectorAll('.expertise-item');
        expertiseItems.forEach(item => observer.observe(item));

        // const categoryItems = document.querySelectorAll('.category-picture-container');
        // categoryItems.forEach(item => observer.observe(item));
    });
    
})();