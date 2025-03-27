document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");
    const csrfTokenField = document.getElementById("csrf-token");
    const forgotPasswordLink = document.getElementById("forgot-password-link");
    const registerLink = document.getElementById("register-link");

    const forgotPasswordModal = document.getElementById("forgot-password-modal");
    const registerModal = document.getElementById("register-modal");

    const closeForgotPassword = document.getElementById("close-forgot-password");
    const closeRegister = document.getElementById("close-register");

    // Generar un token CSRF aleatorio y almacenarlo en sessionStorage
    function generateCSRFToken() {
        const array = new Uint8Array(16);
        crypto.getRandomValues(array);
        return btoa(Array.from(array).map(byte => String.fromCharCode(byte)).join(""));
    }

    if (!sessionStorage.getItem("csrfToken")) {
        sessionStorage.setItem("csrfToken", generateCSRFToken());
    }

    if (csrfTokenField) {
        csrfTokenField.value = sessionStorage.getItem("csrfToken");
    }

    // Alternar visibilidad de la contraseña
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            togglePassword.classList.toggle("visible", !isPassword);
        });
    }

    // Validación del formulario antes de enviarlo
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            const email = emailInput?.value.trim();
            const password = passwordInput?.value.trim();

            if (!email || !password) {
                alert("Todos los campos son obligatorios.");
                event.preventDefault();
                return;
            }

            if (!validateEmail(email)) {
                alert("Por favor, introduce un correo electrónico válido.");
                event.preventDefault();
            }
        });
    }

    // Validar formato de correo electrónico
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Manejo de modales
    function openModal(modal) {
        if (modal) modal.style.display = "block";
    }

    function closeModal(modal) {
        if (modal) modal.style.display = "none";
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault();
            openModal(forgotPasswordModal);
        });
    }

    if (registerLink) {
        registerLink.addEventListener("click", function (event) {
            event.preventDefault();
            openModal(registerModal);
        });
    }

    if (closeForgotPassword) {
        closeForgotPassword.addEventListener("click", function () {
            closeModal(forgotPasswordModal);
        });
    }

    if (closeRegister) {
        closeRegister.addEventListener("click", function () {
            closeModal(registerModal);
        });
    }

    // Cerrar el modal si el usuario hace clic fuera de la ventana del modal
    window.addEventListener("click", function (event) {
        if (event.target === forgotPasswordModal) {
            closeModal(forgotPasswordModal);
        }
        if (event.target === registerModal) {
            closeModal(registerModal);
        }
    });
});
