// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearEl = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for nav height
                    behavior: 'smooth'
                });
            }
        });
    });
});
