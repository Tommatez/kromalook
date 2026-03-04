document.addEventListener('DOMContentLoaded', () => {
    // Parallax Corregido (Solo afecta al texto)
    document.addEventListener('mousemove', (e) => {
        const target = document.querySelector('.hero-parallax-group');
        if (target) {
            let x = (window.innerWidth / 2 - e.pageX) / 45;
            let y = (window.innerHeight / 2 - e.pageY) / 45;
            target.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Smooth Scroll para links internos (Evita el salto brusco)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return; // Evita error si el href es solo "#"
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Menú Hamburguesa
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Ventana Modal de Imágenes (Zoom)
function zoomImg(element) {
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('modal-content');
    const imgSrc = element.querySelector('img').src;
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

// Nueva: Ventana Modal de Contacto Flotante
function toggleContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.toggle('active');
}