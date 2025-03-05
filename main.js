// Función para cambiar el tema de la página
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Mostrar el formulario al hacer clic en "Agenda tu consulta"
const openFormButton = document.getElementById('open-form');
const formSection = document.getElementById('form-section');

openFormButton.addEventListener('click', () => {
    formSection.classList.toggle('hidden');
});

// Cargar noticias
const newsContainer = document.getElementById('news-container');

const loadNews = async () => {
    const apiKey = 'PSR-rf hjj2rjksdkf3994idfospe32efd000d0soewfkldsDFEWdfo3j2wefksle2fdsdf';
    const apiUrl = `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === 'ok') {
            data.articles.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <h3><a href="${news.url}" target="_blank">${news.title}</a></h3>
                    <p>${news.description || 'No description available.'}</p>
                `;
                newsContainer.appendChild(newsItem);
            });
        } else {
            newsContainer.innerHTML = '<p>No se pudieron cargar las noticias.</p>';
        }
    } catch (error) {
        newsContainer.innerHTML = '<p>Error al cargar las noticias.</p>';
        console.error(error);
    }
};

// cargar las noticias
loadNews();
