document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-contacto__formulario');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        // Validación de campos
        const nombre = form.elements['nombre'].value.trim();
        const email = form.elements['email'].value.trim();
        const asunto = form.elements['asunto'].value.trim();
        const mensaje = form.elements['mensaje'].value.trim();

        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }

        // Envío del formulario si todos los campos están completos
        form.submit();
    });
});
