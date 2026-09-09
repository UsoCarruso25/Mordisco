document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ANIMACIONES AL HACER SCROLL
    ===================================================== */

    const elements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       NAVBAR DINÁMICO
    ===================================================== */

    const navbar =
        document.querySelector(".navbar-mordisco");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.padding =
                "13px 35px";

            navbar.style.background =
                "rgba(10,10,10,.97)";

        } else {

            navbar.style.padding =
                "22px 35px";

            navbar.style.background =
                "rgba(16,16,16,.92)";

        }

    });


    /* =====================================================
       PARALLAX SUAVE DEL HERO
    ===================================================== */

    const burger =
        document.querySelector(".fake-food");


    window.addEventListener("scroll", () => {

        const scroll =
            window.scrollY;

        if (scroll < window.innerHeight) {

            burger.style.transform =
                `translateY(${scroll * 0.12}px)`;

        }

    });


    /* =====================================================
       CERRAR NAVBAR EN MÓVIL
    ===================================================== */

    const links =
        document.querySelectorAll(".nav-link");


    const menu =
        document.querySelector(".navbar-collapse");


    links.forEach(link => {

        link.addEventListener("click", () => {

            if (menu.classList.contains("show")) {

                bootstrap.Collapse
                    .getOrCreateInstance(menu)
                    .hide();

            }

        });

    });


});