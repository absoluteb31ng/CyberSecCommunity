document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const formSection = document.getElementById("form-section");
    const openFormButton = document.getElementById("open-form");
    const consultaForm = document.getElementById("consulta-form");
    
    // Modo Oscuro/Claro
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
    
    // Menú responsive
    menuToggle.addEventListener("click", () => {
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
    
    // Mostrar formulario
    openFormButton.addEventListener("click", () => {
        formSection.classList.toggle("hidden");
    });
    
    // Manejar envío del formulario
    consultaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Consulta enviada con éxito");
        consultaForm.reset();
        formSection.classList.add("hidden");
    });
});
