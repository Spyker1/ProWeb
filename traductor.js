document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        es: {
            mainTitle: "Bienvenido a la página de Julian Alejandro Rodríguez Lopez",
            navAbout: "Sobre mí",
            navProjects: "Intereses",
            navContact: "Contacto",
            aboutTitle: "Sobre mí",
            aboutDescription: "Soy Julian Alejandro Rodríguez Lopez, un apasionado desarrollador de Big Data, con experiencia en HTML, CSS, JavaScript, entre otros lenguajes y tecnologías.",
            projectsTitle: "Mis intereses",
            interest1: "Programación web tanto front como back.",
            interest2: "Inteligencia Artificial.",
            interest3: "Analisis de datos.",
            interest4: "Programación con Low Code.",
            interest5: "Desarrollo de APIs.",
            coursesTitle: "Mis Cursos Completados",
            course1Title: "Diseñador de peticiones para modelos de IAgenerativa",
            course1Institution: "Institución: Fundacion Carlos Slim",
            course1Date: "Fecha de finalización: 31 MAY 2024",
            contactTitle: "Contacto",
            contactEmail: "Correo: <a href='mailto:alexrdz1221@gmail.com'>alexrdz1221@gmail.com</a>",
            contactFollow: "Sígueme en: <a href='https://github.com/Spyker1' target='_blank'>GitHub</a>",
            footerText: "&copy; 2024 Julian Alejandro Rodríguez Lopez. Todos los derechos reservados."
        },
        en: {
            mainTitle: "Welcome to the page of Julian Alejandro Rodríguez Lopez",
            navAbout: "About Me",
            navProjects: "Interests",
            navContact: "Contact",
            aboutTitle: "About Me",
            aboutDescription: "I am Julian Alejandro Rodríguez Lopez, a passionate Big Data developer with experience in HTML, CSS, JavaScript, among other languages and technologies.",
            projectsTitle: "My Interests",
            interest1: "Web Development (front and back).",
            interest2: "Artificial Intelligence.",
            interest3: "Data Analysis.",
            interest4: "Low Code Programming.",
            interest5: "API Development.",
            coursesTitle: "My Completed Courses",
            course1Title: "Request Designer for Generative AI Models",
            course1Institution: "Institution: Fundacion Carlos Slim",
            course1Date: "Completion Date: May 31, 2024",
            contactTitle: "Contact",
            contactEmail: "Email: <a href='mailto:alexrdz1221@gmail.com'>alexrdz1221@gmail.com</a>",
            contactFollow: "Follow me on: <a href='https://github.com/Spyker1' target='_blank'>GitHub</a>",
            footerText: "&copy; 2024 Julian Alejandro Rodríguez Lopez. All rights reserved."
        }
    };

    const fadeElements = [
        "main-title", "nav-about", "nav-projects", "nav-contact", "about-title", "about-description",
        "projects-title", "interest-1", "interest-2", "interest-3", "interest-4", "interest-5",
        "courses-title", "course-1-title", "course-1-institution", "course-1-date",
        "contact-title", "contact-email", "contact-follow", "footer-text"
    ];

    // Función para aplicar animación de desvanecimiento (fade-out)
    function applyFadeOut() {
        fadeElements.forEach(id => {
            document.getElementById(id).classList.add('fade-out');
        });
    }

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        // Aplicar el fade-out antes de cambiar el contenido
        applyFadeOut();
        
        setTimeout(() => {
            // Cambiar el contenido después del fade-out
            document.getElementById("main-title").textContent = translations[lang].mainTitle;
            document.getElementById("nav-about").textContent = translations[lang].navAbout;
            document.getElementById("nav-projects").textContent = translations[lang].navProjects;
            document.getElementById("nav-contact").textContent = translations[lang].navContact;
            document.getElementById("about-title").textContent = translations[lang].aboutTitle;
            document.getElementById("about-description").textContent = translations[lang].aboutDescription;
            document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
            document.getElementById("interest-1").textContent = translations[lang].interest1;
            document.getElementById("interest-2").textContent = translations[lang].interest2;
            document.getElementById("interest-3").textContent = translations[lang].interest3;
            document.getElementById("interest-4").textContent = translations[lang].interest4;
            document.getElementById("interest-5").textContent = translations[lang].interest5;
            document.getElementById("courses-title").textContent = translations[lang].coursesTitle;
            document.getElementById("course-1-title").textContent = translations[lang].course1Title;
            document.getElementById("course-1-institution").textContent = translations[lang].course1Institution;
            document.getElementById("course-1-date").textContent = translations[lang].course1Date;
            document.getElementById("contact-title").textContent = translations[lang].contactTitle;
            document.getElementById("contact-email").innerHTML = translations[lang].contactEmail;
            document.getElementById("contact-follow").innerHTML = translations[lang].contactFollow;
            document.getElementById("footer-text").innerHTML = translations[lang].footerText;
            
            // Remover el fade-out para hacer el fade-in
            fadeElements.forEach(id => {
                document.getElementById(id).classList.remove('fade-out');
            });
        }, 500); // Espera el tiempo suficiente para que se complete el fade-out
    }

    // Event listeners para los botones de idioma
    const langButtons = document.querySelectorAll("[data-lang]");
    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.getAttribute("data-lang");
            changeLanguage(selectedLang);
        });
    });

    // Configuración inicial en español
    changeLanguage('es');
});
