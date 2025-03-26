// Agregar un nuevo tema
function addTopic() {
    let topicInput = document.getElementById("topic");
    let topicText = topicInput.value.trim();
    let isAnonymous = document.getElementById("anonymous").checked;

    if (topicText === "") {
        alert("Por favor, escribe un tema.");
        return;
    }

    let discussionList = document.getElementById("discussion-list");

    // Generar nombre de usuario
    let username = isAnonymous ? "Anónimo 👤" : "Usuario";

    // Crear nuevo tema con animación
    let newTopic = document.createElement("li");
    newTopic.innerHTML = `<strong>${username}:</strong> ${topicText}`;
    newTopic.style.opacity = 0;
    discussionList.appendChild(newTopic);

    setTimeout(() => newTopic.style.opacity = 1, 200); // Animación de aparición

    // Guardar en localStorage
    saveTopics();

    // Limpiar input
    topicInput.value = "";
}

// Guardar temas en localStorage
function saveTopics() {
    let topics = [];
    document.querySelectorAll("#discussion-list li").forEach((li) => {
        topics.push(li.innerHTML); // Guardamos el contenido con usuario incluido
    });
    localStorage.setItem("topics", JSON.stringify(topics));
}

// Cargar temas al iniciar
function loadTopics() {
    let storedTopics = localStorage.getItem("topics");
    if (storedTopics) {
        let topics = JSON.parse(storedTopics);
        let discussionList = document.getElementById("discussion-list");

        topics.forEach((topic) => {
            let newTopic = document.createElement("li");
            newTopic.innerHTML = topic;
            discussionList.appendChild(newTopic);
        });
    }
}

// Cargar temas solo si estamos en forum.html
window.onload = function() {
    if (document.getElementById("discussion-list")) {
        loadTopics();
    }
};
