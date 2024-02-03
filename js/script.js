document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".falling-letter");

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`;
    });
});
