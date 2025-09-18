// Funcionalidad del menú de navegación móvil
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('#mobile-menu a');

function toggleMenu() {
    mobileMenu.classList.toggle('-translate-x-full');
    // Animación de escala al abrir/cerrar menú
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
    // En una aplicación real, se enviaría esta información a un backend.
    console.log('Formulario enviado:', {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        empresa: document.getElementById('empresa').value,
        servicio: document.getElementById('servicio').value,
        mensaje: document.getElementById('mensaje').value
    });

    // En lugar de alert(), usamos un mensaje de confirmación en la UI.
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
