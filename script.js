function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}
function scrollLeft() {
    let slider = document.querySelector(".projects-slider");
    slider.scrollBy({
        left: -320,
        behavior: "smooth"
    });
}

function scrollRight() {
    let slider = document.querySelector(".projects-slider");
    slider.scrollBy({
        left: 320,
        behavior: "smooth"
    });
}
