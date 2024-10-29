document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show'); // Add the class to trigger the animation
        }, index * 200); // Stagger the appearance of each card
    });
});
