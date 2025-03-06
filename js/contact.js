document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const mensajeExito = document.getElementById("mensaje-exito");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validar los campos
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const servicio = document.getElementById("servicio").value;

        if (nombre === "" || correo === "" || servicio === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        console.log("Enviando formulario...");
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Servicio:", servicio);

        // Mostrar mensaje
        mensajeExito.classList.remove("oculto");
        form.reset();

        setTimeout(() => {
            mensajeExito.classList.add("oculto");
        }, 3000);
    });
});
