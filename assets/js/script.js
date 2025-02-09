document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".cards");
    const leftButton = document.querySelector(".slider-btn.left");
    const rightButton = document.querySelector(".slider-btn.right");

    leftButton.addEventListener("click", function () {
        slider.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightButton.addEventListener("click", function () {
        slider.scrollBy({ left: 300, behavior: "smooth" });
    });
});