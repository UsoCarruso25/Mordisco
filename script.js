document.addEventListener("DOMContentLoaded", () => {

    /* SCROLL REVEAL */
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.12 }
        );
        revealElements.forEach((el) => revealObserver.observe(el));
    } else {
        revealElements.forEach((el) => el.classList.add("active"));
    }

    /* NAVBAR AL HACER SCROLL */
    const navbar = document.querySelector(".navbar-mordisco");

    window.addEventListener("scroll", () => {
        if (!navbar) return;
        navbar.style.padding = window.scrollY > 80 ? "10px 0" : "20px 0";
    }, { passive: true });

    /* PARALLAX HERO */
    const heroPhoto = document.querySelector(".hero-photo");

    window.addEventListener("scroll", () => {
        if (!heroPhoto) return;
        const scroll = window.scrollY;
        if (scroll < window.innerHeight) {
            heroPhoto.style.backgroundPosition = `center ${50 + scroll * 0.03}%`;
        }
    }, { passive: true });

    /* PARALLAX FOTOGRAFÍA */
    const photoBanner = document.querySelector(".photo-banner");

    window.addEventListener("scroll", () => {
        if (!photoBanner) return;
        const rect = photoBanner.getBoundingClientRect();
        const offset = rect.top * -0.08;
        photoBanner.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    }, { passive: true });

    /* CERRAR MENÚ MÓVIL */
    const navLinks = document.querySelectorAll(".nav-link");
    const menu = document.querySelector("#mainMenu");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menu && menu.classList.contains("show") && typeof bootstrap !== "undefined") {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

    /* EMAILJS - FORMULARIO DE REGISTRO */
    if (typeof emailjs !== "undefined") {
        emailjs.init({ publicKey: "6wJ1VhMMm2HW_uv8A" });
    }

    const formRegistro = document.getElementById("formRegistro");
    const btnRegistro = document.getElementById("btnRegistro");
    const formMensaje = document.getElementById("formMensaje");

    if (formRegistro && btnRegistro && formMensaje) {

        formRegistro.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = this.user_email.value.trim();

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formMensaje.textContent = "Por favor ingresa un correo válido.";
                formMensaje.className = "form-mensaje error";
                return;
            }

            const textoOriginal = btnRegistro.textContent;

            btnRegistro.disabled = true;
            btnRegistro.textContent = "ENVIANDO...";
            formMensaje.textContent = "";
            formMensaje.className = "form-mensaje";

            emailjs.send(
                "service_m4xsidp",
                "template_966mk2o",
                {
                    user_email: email,
                    to_email: email,
                    reply_to: email
                }
            )
            .then(function () {
                formMensaje.textContent = "🍔 ¡Bienvenido al club! Revisa tu correo.";
                formMensaje.className = "form-mensaje ok";
                formRegistro.reset();
            })
            .catch(function (error) {
                console.error("EmailJS error:", error);
                formMensaje.textContent = "No pudimos enviar el correo. Inténtalo de nuevo.";
                formMensaje.className = "form-mensaje error";
            })
            .finally(function () {
                btnRegistro.disabled = false;
                btnRegistro.textContent = textoOriginal;
            });
        });

    }

});