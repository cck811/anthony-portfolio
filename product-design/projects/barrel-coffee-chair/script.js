document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top-button');

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Show or hide the "scroll to top" button based on the scroll position
        if (scrollTop > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToTop();
    });

    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Run the function initially in case the user starts the page already scrolled
});
