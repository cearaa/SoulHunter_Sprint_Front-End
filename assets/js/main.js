
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

const back = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        back.style.display = 'block';
    } else {
        back.style.display = 'none';
    }
});

if (back) {
    back.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback');

        if (!email.includes('@')) {
            feedback.innerHTML = '<p class="error">Digite um email válido.</p>';
            return;
        }

        feedback.innerHTML = '<p class="success">Mensagem enviada com sucesso!</p>';
        form.reset();
    });
}

const filter = document.getElementById('rankingFilter');

if (filter) {
    filter.addEventListener('change', () => {
        document.querySelectorAll('.ranking-row').forEach(row => {
            row.style.display = (filter.value === 'all' || row.dataset.level === filter.value) ? '' : 'none';
        });
    });
}