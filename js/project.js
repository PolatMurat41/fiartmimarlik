//  HEADER SCROLL BEYAZ OLMASI
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var scrollThreshold = 10; // Değişiklik için belirlenen scroll eşiği (pixel cinsinden)

  function updateHeaderBackground() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeaderBackground);

  var headerLinks = document.querySelectorAll("header ul li a");

  function updateActivateLink() {
    var currentURL = window.location.href;

    headerLinks.forEach(function (link) {
      var linkURL = link.href;

      if (currentURL.includes(linkURL) && !link.classList.contains("active")) {
        headerLinks.forEach(function (otherLink) {
          otherLink.classList.remove("active");
        });

        link.classList.add("active");
      }
    });
  }

  if (window.location.pathname === "/projects.html") {
    document.body.classList.add("projects-page");
    headerLinks[1].classList.add("active");
  }

  window.addEventListener("load", updateActivateLink);
  window.addEventListener("hashchange", updateActivateLink);

  // SLİDER BUTTON HER MAIN-2 DE CALISIYOR
  /* const sliders = document.querySelectorAll(".main-2 .slider");
  const navButtons = document.querySelectorAll(".nav img");

  function activate(e) {
    sliders.forEach(function (slider) {
      const items = slider.querySelectorAll(".item");
      e.target.matches(".next") && slider.append(items[0]);
      e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
    });
  }

  navButtons.forEach(function (button) {
    button.addEventListener("click", activate, false);
  }); */
});

//  POPUP START

/* var currentImageIndex = 0;
var images = document.getElementsByClassName("popup-img");

function openPopup() {
  document.getElementById("imagePopup").style.display = "block";
  showImage(currentImageIndex);
}

function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}

function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
  currentImageIndex = index;
}

function changeImage(n) {
  var newIndex = currentImageIndex + n;
  if (newIndex >= images.length) {
    newIndex = 0; // Döngüye devam et
  } else if (newIndex < 0) {
    newIndex = images.length - 1; // Son resme git
  }
  showImage(newIndex);
} */

// deneme

// Butonları ve popup resmi tanımlayın
const buttons = document.querySelectorAll(".popup-button");
const popupImg = document.getElementById("popupImg");

// Butonlara tıklama olaylarını dinleyin
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const images = this.dataset.images.split(", "); // Butona ait resimleri alın
    openPopup(images[0]); // İlk resmi aç
    this.dataset.currentIndex = 0; // Butona ait açık olan resmin dizinini sakla
    this.dataset.images = images; // Butona ait resimlerin listesini sakla
  });
});

// Popup'ı açmak için bir fonksiyon tanımlayın
function openPopup(imageSrc) {
  popupImg.src = imageSrc;
  document.getElementById("imagePopup").style.display = "block";
}

// Popup'ı kapatan fonksiyon (Örnek olarak)
function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}

// Önceki resme geçiş fonksiyonu
function prevImage() {
  const currentIndex = parseInt(this.dataset.currentIndex);
  const images = document
    .querySelector(".popup-button")
    .dataset.images.split(", ");
  let newIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(images[newIndex], newIndex);
}

// Sonraki resme geçiş fonksiyonu
function nextImage() {
  const currentIndex = parseInt(
    document.querySelector(".popup-button").dataset.currentIndex
  );
  const images = document
    .querySelector(".popup-button")
    .dataset.images.split(", ");
  let newIndex = (currentIndex + 1) % images.length;
  updateImage(images[newIndex], newIndex);
}

// Resmi güncelleme fonksiyonu
function updateImage(imageSrc, index) {
  popupImg.src = imageSrc;
  document.querySelector(".popup-button").dataset.currentIndex = index;
}

// Butonlara tıklama olaylarını dinleyin
document.querySelector(".popup-prev").addEventListener("click", prevImage);
document.querySelector(".popup-next").addEventListener("click", nextImage);

//  POPUP FINISH
