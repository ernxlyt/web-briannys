// Funcionalidad del menú de navegación móvil
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('#mobile-menu a');

function toggleMenu() {
    mobileMenu.classList.toggle('-translate-x-full');
    menuButton.classList.add('scale-110');
    setTimeout(() => {
        menuButton.classList.remove('scale-110');
    }, 200);
}

menuButton.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

// Manejador del formulario de contacto
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Formulario enviado:', {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        empresa: document.getElementById('empresa').value,
        servicio: document.getElementById('servicio').value,
        mensaje: document.getElementById('mensaje').value
    });

    const formContainer = form.parentElement;
    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'text-center mt-4 p-4 rounded-xl bg-[#20D954] text-white opacity-0 animate-fadeIn';
    confirmationMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
    formContainer.appendChild(confirmationMessage);

    setTimeout(() => {
        confirmationMessage.classList.remove('opacity-0');
        confirmationMessage.classList.add('opacity-100');
    }, 10);

    form.reset();
});

// Animación personalizada fadeIn
const style = document.createElement('style');

// ------------------- SLIDER DE SERVICIOS -------------------
const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let offset = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${offset}%)`;
}

nextBtn?.addEventListener('click', () => {
    const maxOffset = (carousel.children.length - 4) * 25; // cada card ocupa 25% del ancho total
    if (offset < maxOffset) {
        offset += 25;
        updateCarousel();
    }
});

prevBtn?.addEventListener('click', () => {
    if (offset > 0) {
        offset -= 25;
        updateCarousel();
    }
});

// Configuración inicial
carousel.style.display = 'flex';
carousel.style.transition = 'transform 0.5s ease-in-out';
updateCarousel();