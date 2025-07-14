document.addEventListener('DOMContentLoaded', function () {
    
    /*-----------------------scroll to top button-------------------------*/
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
/*---------------------------------------------counter---------------------------------------------*/ 

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
