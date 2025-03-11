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
    const apiKey = 'f474e03cbb4b41599aaccd0d6b86d336';
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

loadNews();

document.addEventListener("DOMContentLoaded", function () {
    const testimonios = [
        {
            mensaje: "🔐 'Gracias a Consultorio de Ciberseguridad, nuestra empresa evitó una filtración de datos. ¡100% recomendado!'",
            autor: "- Ana López, CEO de TechSafe"
        },
        {
            mensaje: "🛡️ 'Sus análisis de vulnerabilidades nos permitieron mejorar la seguridad de nuestra red interna.'",
            autor: "- Juan Pérez, Administrador de Sistemas"
        },
        {
            mensaje: "💻 'La capacitación en ciberseguridad nos ayudó a fortalecer la seguridad de nuestros empleados.'",
            autor: "- Luis Ramírez, Responsable de TI"
        }
    ];

    let index = 0;
    const container = document.getElementById("testimonial-container");
    const button = document.getElementById("next-testimonial");

    function mostrarTestimonio() {
        container.innerHTML = `
            <div class="testimonial">
                <p>${testimonios[index].mensaje}</p>
                <span>${testimonios[index].autor}</span>
            </div>
        `;
    }

    button.addEventListener("click", function () {
        index = (index + 1) % testimonios.length;
        mostrarTestimonio();
    });

    mostrarTestimonio();
});
