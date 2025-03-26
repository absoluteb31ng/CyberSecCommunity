document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");
    const csrfTokenField = document.getElementById("csrf-token");

    // Generar un token CSRF aleatorio y almacenarlo en sessionStorage
    function generateCSRFToken() {
        return window.btoa(crypto.getRandomValues(new Uint8Array(16)).join(''));
    }

    if (!sessionStorage.getItem("csrfToken")) {
        sessionStorage.setItem("csrfToken", generateCSRFToken());
    }

    csrfTokenField.value = sessionStorage.getItem("csrfToken");

    // Alternar visibilidad de la contraseña
    togglePassword.addEventListener("click", function () {
        const isPassword = passwordInput.getAttribute("type") === "password";
        passwordInput.setAttribute("type", isPassword ? "text" : "password");
        togglePassword.classList.toggle("visible", isPassword);
    });

    // Validación del formulario antes de enviarlo
    loginForm.addEventListener("submit", function (event) {
        const email = document.getElementById("email").value.trim();
        const password = passwordInput.value.trim();

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

    const forgotPasswordLink = document.getElementById("forgot-password-link");
    const registerLink = document.getElementById("register-link");

    const forgotPasswordModal = document.getElementById("forgot-password-modal");
    const registerModal = document.getElementById("register-modal");

    const closeForgotPassword = document.getElementById("close-forgot-password");
    const closeRegister = document.getElementById("close-register");

    // Abrir el modal de "Olvidé mi contraseña"
    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        forgotPasswordModal.style.display = "block";
    });

    // Abrir el modal de "Registrarse"
    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        registerModal.style.display = "block";
    });

    // Cerrar el modal de "Olvidé mi contraseña"
    closeForgotPassword.addEventListener("click", function () {
        forgotPasswordModal.style.display = "none";
    });

    // Cerrar el modal de "Registrarse"
    closeRegister.addEventListener("click", function () {
        registerModal.style.display = "none";
    });

    // Cerrar el modal si el usuario hace clic fuera de la ventana del modal
    window.addEventListener("click", function (event) {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = "none";
        }
        if (event.target === registerModal) {
            registerModal.style.display = "none";
        }
    });
});
