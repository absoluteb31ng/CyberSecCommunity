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

const newsContainer = document.getElementById('news-container');

const loadNews = async () => {
    const apiKey = '878a001269f043e8876d9b8f0b8c0eee';  // Reemplaza con tu API Key
    const apiUrl = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&text=cybersecurity&sort=date`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // console.log(data); // Para depuración, revisa la estructura de la respuesta

        if (data.news && data.news.length > 0) {
            data.news.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <h3><a href="${news.url}" target="_blank">${news.title}</a></h3>
                    <p>${news.text || 'No description available.'}</p>
                `;
                newsContainer.appendChild(newsItem);
            });
        } else {
            newsContainer.innerHTML = '<p>No se encontraron noticias.</p>';
        }
    } catch (error) {
        newsContainer.innerHTML = '<p>Error al cargar las noticias.</p>';
        console.error(error);
    }
};

// Llamar a la función para cargar noticias
loadNews();


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
