window.addEventListener("DOMContentLoaded", () => {

    // STEPPER ACTIVE SECTION
    const sections = document.querySelectorAll("section");
    const stepItems = document.querySelectorAll(".step-item");

    function activateStep() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {

                current = section.getAttribute("id");

            }

        });

        stepItems.forEach(item => {

            item.classList.remove("active-step");

            const link = item.querySelector("a");

            // FIXED EXTRA SPACE BUG
            if (link.getAttribute("href") === `#${current}`) {

                item.classList.add("active-step");

            }

        });

    }

    // INITIAL CHECK
    activateStep();

    // ON SCROLL
    window.addEventListener("scroll", activateStep);

});