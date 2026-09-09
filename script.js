

document.addEventListener("DOMContentLoaded", () => {

    const nav =
        document.querySelector(".mordisco-nav");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            nav.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.25)";

        } else {

            nav.style.boxShadow =
                "none";

        }

    });




    document
        .querySelectorAll(".navbar-nav .nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                const menu =
                    document.querySelector(
                        ".navbar-collapse"
                    );

                if (menu.classList.contains("show")) {

                    bootstrap.Collapse
                        .getOrCreateInstance(menu)
                        .hide();

                }

            });

        });

});