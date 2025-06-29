// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Simple console log to confirm script is loaded
    console.log('Personal website JavaScript loaded!');

    // Example: Smooth scrolling for anchor links (if you add them)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You could add more complex JS here if needed,
    // e.g., a simple contact form validation (client-side only),
    // or a dark mode toggle.
});