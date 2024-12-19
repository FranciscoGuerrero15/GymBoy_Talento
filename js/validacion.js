document.addEventListener('DOMContentLoaded', function () {
    // Asegúrate de que el ID del formulario coincida con el del HTML
    const formulario = document.getElementById("contactForm"); // Cambié "miFormulario" por "contactForm", según tu HTML
    console.log(formulario);

    // Verificar si el formulario existe en el DOM
    if (formulario) {
        formulario.addEventListener("submit", event => {
            event.preventDefault(); // Prevenir el envío por defecto del formulario

            // Obtener los valores de los campos
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            console.log(nombre);
            console.log(email);
            console.log(mensaje);

            // Elementos para mostrar errores
            const errorNombre = document.getElementById("errorNombre");
            const errorEmail = document.getElementById("errorEmail");
            const errorMensaje = document.getElementById("errorMensaje");

            let formularioValido = true;

            // Validar el nombre
            if (nombre === "") {
                errorNombre.classList.remove("d-none"); // Asegúrate de tener la clase 'd-none' para ocultar el error
                formularioValido = false;
            } else {
                errorNombre.classList.add("d-none");
            }

            // Validar el correo electrónico
            const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if (!emailRegex.test(email)) {
                errorEmail.classList.remove("d-none"); // Mostrar el error si el email no es válido
                formularioValido = false;
            } else {
                errorEmail.classList.add("d-none");
            }

            // Validar el mensaje
            if (mensaje.length < 10 ) {
                errorMensaje.classList.remove("d-none");
                formularioValido = false;
            } else {
                errorMensaje.classList.add("d-none");
            }

            // Si todo es válido, mostrar un mensaje de éxito
            if (formularioValido) {
                alert("Formulario enviado correctamente.");
                // Aquí podrías realizar un envío de formulario con AJAX o alguna API, por ejemplo
            } else {
                alert("Por favor, corrige los errores en el formulario.");
            }


            const formularioContacto = {
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje
            };
        });
    } else {
        console.error("Formulario no encontrado.");
    }
});
