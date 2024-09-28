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
            contactTitle: "Contacto",
            contactEmail: "Correo: alexrdz1221@gmail.com",
            contactFollow: "Sígueme en:",
            footerText: "&copy; 2024 Julian Alejandro Rodríguez Lopez. Todos los derechos reservados.",
            
            // Traducción del CV
            cvTitle: "Currículum Vitae",
            experienceTitle: "Experiencia Laboral",
            educationTitle: "Educación",
            skillsTitle: "Habilidades",
            job1Title: "Desarrollador Fullstack",
            job1Company: "Empresa ProInternet",
            job1Period: "2023 - 2024",
            job1Description: "Desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript, SQL y Node.js.",
            educationInfo: "Ingeniería en Sistemas Computacionales - Instituto Tecnologico de Ciudad Madero | 2021 - actualidad",
            skillPython: "Python",
            skillJavaScript: "JavaScript",
            skillJava: "Java",
            skillJSON: "JSON",
            skillHTML: "HTML",
            skillCSS: "CSS",
            skillSQL: "SQL",
            skillHBS: "HBS (Handlebars)"
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
            contactTitle: "Contact",
            contactEmail: "Email: alexrdz1221@gmail.com",
            contactFollow: "Follow me on:",
            footerText: "&copy; 2024 Julian Alejandro Rodríguez Lopez. All rights reserved.",
            
            // Traducción del CV
            cvTitle: "Curriculum Vitae",
            experienceTitle: "Work Experience",
            educationTitle: "Education",
            skillsTitle: "Skills",
            job1Title: "Fullstack Developer",
            job1Company: "ProInternet Company",
            job1Period: "2023 - 2024",
            job1Description: "Developed web applications using HTML, CSS, JavaScript, SQL, and Node.js.",
            educationInfo: "Computer Systems Engineering - Instituto Tecnologico de Ciudad Madero | 2021 - present",
            skillPython: "Python",
            skillJavaScript: "JavaScript",
            skillJava: "Java",
            skillJSON: "JSON",
            skillHTML: "HTML",
            skillCSS: "CSS",
            skillSQL: "SQL",
            skillHBS: "HBS (Handlebars)"
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
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
        document.getElementById("contact-title").textContent = translations[lang].contactTitle;
        document.getElementById("contact-email").textContent = translations[lang].contactEmail;
        document.getElementById("contact-follow").textContent = translations[lang].contactFollow;
        document.getElementById("footer-text").innerHTML = translations[lang].footerText;
        document.getElementById("cv-title").textContent = translations[lang].cvTitle;
        document.getElementById("experience-title").textContent = translations[lang].experienceTitle;
        document.getElementById("education-title").textContent = translations[lang].educationTitle;
        document.getElementById("skills-title").textContent = translations[lang].skillsTitle;
        document.getElementById("job-1-title").textContent = translations[lang].job1Title;
        document.getElementById("job-1-company").textContent = translations[lang].job1Company;
        document.getElementById("job-1-period").textContent = translations[lang].job1Period;
        document.getElementById("job-1-description").textContent = translations[lang].job1Description;
        document.getElementById("education-info").textContent = translations[lang].educationInfo;
        document.getElementById("skill-python").textContent = translations[lang].skillPython;
        document.getElementById("skill-javascript").textContent = translations[lang].skillJavaScript;
        document.getElementById("skill-java").textContent = translations[lang].skillJava;
        document.getElementById("skill-json").textContent = translations[lang].skillJSON;
        document.getElementById("skill-html").textContent = translations[lang].skillHTML;
        document.getElementById("skill-css").textContent = translations[lang].skillCSS;
        document.getElementById("skill-sql").textContent = translations[lang].skillSQL;
        document.getElementById("skill-hbs").textContent = translations[lang].skillHBS;
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
