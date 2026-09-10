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


});