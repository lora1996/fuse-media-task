//toggle navigation button and expanding menu
const navBtn = document.querySelector(".nav-toggle");
const navContainer = document.querySelector(".nav-container");

window.matchMedia("(min-width: 800px)")
    .addListener(function (e) {
        if (e.matches) {
            navContainer.classList.remove("toggle-menu")

        }
    });

navBtn.addEventListener('click', function () {
    navContainer.classList.toggle("toggle-menu");
});