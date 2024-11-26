// Seleção do botão e do menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Abrir e fechar menu ao clicar no ícone
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.classList.toggle('menu-open'); // Previne o scroll quando o menu está aberto
});

// Fechar o menu ao clicar em um link
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open'); // Fecha o menu
        document.body.classList.remove('menu-open'); // Permite scroll novamente
    });
});

// Scroll suave ao clicar nos links internos (âncoras)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão
        const targetId = this.getAttribute('href').substring(1); // Remove o "#" do ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o elemento
        }
    });
});

// Animação de entrada para os cartões da seção de valores
const valueCards = document.querySelectorAll('.value-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Adiciona a classe quando o cartão aparece na tela
        }
    });
}, { threshold: 0.5 }); // 50% do elemento deve estar visível

valueCards.forEach(card => observer.observe(card));
// Carrossel de Colaboradores
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Botão Anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

// Botão Próximo
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

// Mudança automática do carrossel a cada 8 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}, 8000);
