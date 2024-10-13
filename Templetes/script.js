// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const sectionId = link.getAttribute('href').replace('#', '');
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});