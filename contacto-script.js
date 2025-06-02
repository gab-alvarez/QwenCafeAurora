document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formularioContacto");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validarCampos() {
        let valido = true;

        if (nombre.value.trim() === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            valido = false;
        } else {
            errorNombre.textContent = "";
        }

        if (!validarEmail(email.value)) {
            errorEmail.textContent = "Ingresa un correo válido.";
            valido = false;
        } else {
            errorEmail.textContent = "";
        }

        if (mensaje.value.trim() === "") {
            errorMensaje.textContent = "Escribe tu mensaje.";
            valido = false;
        } else {
            errorMensaje.textContent = "";
        }

        return valido;
    }

    form.addEventListener("submit", function (e) {
        if (!validarCampos()) {
            e.preventDefault();
        } else {
            alert("Formulario enviado correctamente.");
        }
    });
});