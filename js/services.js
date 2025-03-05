let currentIndex = 0;

function moveSlide(direction) {
    const serviceList = document.querySelector(".service-list");
    const totalItems = document.querySelectorAll(".service-card").length;
    
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    serviceList.style.transform = `translateX(${offset}%)`;
}
