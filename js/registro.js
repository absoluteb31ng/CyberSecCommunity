document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");
    const csrfToken = document.getElementById("csrf-token");

    // Generar un token CSRF simple (en un entorno real, debería generarse en el servidor)
    function generateCSRFToken() {
        return btoa(Date.now().toString());
    }
    csrfToken.value = generateCSRFToken();

    // Alternar la visibilidad de la contraseña
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.add("visible");
        } else {
            passwordInput.type = "password";
            togglePassword.classList.remove("visible");
        }
    });

    // Validación del formulario antes de enviarlo
    loginForm.addEventListener("submit", function (event) {
        const email = document.getElementById("email").value;
        const password = passwordInput.value;

        if (!email || !password) {
            alert("Todos los campos son obligatorios.");
            event.preventDefault();
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            event.preventDefault();
            return;
        }
    });

    // Validar formato de correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
