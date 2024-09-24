document.addEventListener("DOMContentLoaded", function() {
    // Scroll suave
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('navbar');
    hamburger.addEventListener('click', function() {
        nav.querySelector('ul').classList.toggle('show');
    });

    // Modo claro/oscuro con cambio de icono de sol y luna
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Cargar el tema desde el localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Cambiar a luna si está en modo oscuro
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon'); // Cambiar a luna
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambiar a sol
            localStorage.removeItem('theme');
        }
        toggleParticlesTheme(); // Cambiar el color de las partículas cuando se cambia el tema
    });

    // Botón "Volver arriba"
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animaciones de entrada al hacer scroll (Scroll animations)
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach(el => observer.observe(el));

    // Partículas flotantes
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100;
    const mouse = { x: null, y: null };

    // Crear el lienzo de partículas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById('particles').appendChild(canvas);

    // Función para crear partículas
    function createParticles() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const particleColor = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)';
        
        particles.length = 0; // Reiniciar partículas
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 5 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                color: particleColor
            });
        }
    }

    // Función para animar las partículas
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
            if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    // Función para cambiar el color de las partículas al cambiar el tema
    function toggleParticlesTheme() {
        createParticles(); // Recrear las partículas con el nuevo color
    }

    // Inicializar las partículas y empezar la animación
    createParticles();
    animateParticles();

    // Actualizar el tamaño del canvas al redimensionar la ventana
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createParticles(); // Recrear partículas en el nuevo tamaño
    });
    const courseList = document.querySelector('.course-list');

    let currentIndex = 0;


    
});

