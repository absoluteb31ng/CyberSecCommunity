function addTopic() {
    let topicInput = document.getElementById("topic");
    let topicText = topicInput.value.trim();

    if (topicText === "") {
        alert("Por favor, escribe un tema.");
        return;
    }

    let discussionList = document.getElementById("discussion-list");
    let newTopic = document.createElement("li");
    newTopic.textContent = topicText;

    discussionList.appendChild(newTopic);
    saveTopics();

    topicInput.value = "";
}

// Guardar temas en localStorage
function saveTopics() {
    let topics = [];
    document.querySelectorAll("#discussion-list li").forEach((li) => {
        topics.push(li.textContent);
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
            newTopic.textContent = topic;
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
