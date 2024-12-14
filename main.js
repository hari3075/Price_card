document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const dropdownContainer = card.querySelector(".dropdown-container");
        const radio = card.querySelector("input[type='radio']");


        card.addEventListener("mouseenter", () => {
            if (dropdownContainer) dropdownContainer.style.display = "block";
        });

        card.addEventListener("mouseleave", () => {
            if (dropdownContainer) dropdownContainer.style.display = "none";
        });


        if (radio) {
            radio.addEventListener("change", () => {
                cards.forEach((c) => {
                    const dc = c.querySelector(".dropdown-container");
                    if (dc) dc.style.display = "none";
                });
                if (dropdownContainer) dropdownContainer.style.display = "block";
            });
        }
    });
});
