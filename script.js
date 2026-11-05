document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================================
       NAVBAR AL HACER SCROLL
    ===================================================== */

    const navbar =
        document.querySelector(".navbar-mordisco");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.padding =
                "10px 0";

        } else {

            navbar.style.padding =
                "20px 0";

        }

    });


    /* =====================================================
       PARALLAX HERO
    ===================================================== */

    const heroPhoto =
        document.querySelector(".hero-photo");


    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;

        if (scroll < window.innerHeight) {

            heroPhoto.style.backgroundPosition =
                `center ${50 + scroll * 0.03}%`;

        }

    });


    /* =====================================================
       PARALLAX FOTOGRAFÍA
    ===================================================== */

    const photoBanner =
        document.querySelector(".photo-banner");


    window.addEventListener("scroll", () => {

        if (!photoBanner) return;

        const rect =
            photoBanner.getBoundingClientRect();

        const offset =
            rect.top * -0.08;

        photoBanner.style.backgroundPosition =
            `center calc(50% + ${offset}px)`;

    });


    /* =====================================================
       CERRAR MENÚ MÓVIL
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav-link");


    const menu =
        document.querySelector("#mainMenu");


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (menu.classList.contains("show")) {

                bootstrap.Collapse
                    .getOrCreateInstance(menu)
                    .hide();

            }

        });

    });


    /* =====================================================
       EMAILJS - FORMULARIO DE REGISTRO
    ===================================================== */

    // Inicializa EmailJS con tu Public Key
    if (typeof emailjs !== "undefined") {

        emailjs.init({
            publicKey: "TU_PUBLIC_KEY_AQUI"
        });

    }


    const formRegistro =
        document.getElementById("formRegistro");

    const btnRegistro =
        document.getElementById("btnRegistro");

    const formMensaje =
        document.getElementById("formMensaje");


    if (formRegistro && btnRegistro && formMensaje) {

        formRegistro.addEventListener("submit", function (e) {

            e.preventDefault();

            const email =
                this.user_email.value.trim();

            // Validación básica
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

                formMensaje.textContent =
                    "Por favor ingresa un correo válido.";

                formMensaje.className =
                    "form-mensaje error";

                return;

            }

            const textoOriginal =
                btnRegistro.textContent;

            btnRegistro.disabled = true;
            btnRegistro.textContent = "ENVIANDO...";
            formMensaje.textContent = "";
            formMensaje.className = "form-mensaje";

            emailjs.send(
                "TU_SERVICE_ID",     // ← Service ID
                "TU_TEMPLATE_ID",    // ← Template ID
                {
                    user_email: email,
                    to_email:   email,
                    reply_to:   email
                }
            )
            .then(function () {

                formMensaje.textContent =
                    "🍔 ¡Bienvenido al club! Revisa tu correo.";

                formMensaje.className =
                    "form-mensaje ok";

                formRegistro.reset();

            })
            .catch(function (error) {

                console.error("EmailJS error:", error);

                formMensaje.textContent =
                    "No pudimos enviar el correo. Inténtalo de nuevo.";

                formMensaje.className =
                    "form-mensaje error";

            })
            .finally(function () {

                btnRegistro.disabled = false;
                btnRegistro.textContent = textoOriginal;

            });

        });

    }

});