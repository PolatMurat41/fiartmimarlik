document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".falling-letter");

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`;
    })});
// js2/3/2024 6:53:33 PM dosyanızdaki JavaScript kodu

document.addEventListener("DOMContentLoaded", function () {
    // Sayfa tamamen yüklendiğinde çalışacak fonksiyon
    try {
        // Belirli bir süre sonra anasayfaya yönlendirme
        setTimeout(function () {
            window.location.href = "http://localhost:3000/home.html"; // Live serverinize uygun adresi kullanın
        }, 6000); // 6000 milisaniye = 6 saniye
    } catch (error) {
        console.error("JavaScript hatası:", error);
    }
});
