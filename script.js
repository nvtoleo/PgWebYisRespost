document.addEventListener('DOMContentLoaded', () => {
    
    // Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Función para bajar suavemente al contacto
    window.scrollToContact = () => {
        document.getElementById('contacto').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
});