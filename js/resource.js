
function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
    } else {
        section.classList.add("hidden");
    }
}