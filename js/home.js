let stars = document.getElementById("stars");
// let moon = document.getElementById('moon');
let mountains_behind = document.getElementById("mountains_behind");
//let text = document.getElementById('text');
let logo = document.getElementById("logo");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
//let header = document.querySelector('header');

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  // moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  //logo.style.marginRight = value * 5 + 'px';
  //logo.style.marginTop = value * 5 + 'px';
  text.style.marginRight = value * 5 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  // header.style.top = value * 0.5 + 'px';
});

//  GRIDLER ICIN
document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      item.innerHTML =
        '<video autoplay muted loop><source src="video.mp4 type="video/mp4"></video ';
    });

    item.addEventListener("mouseleave", function () {
      item.innerHTML = '<div class="video-placeholder"></div> ';
    });
  });
});

//  ASAGI INDIKCE HEADER BEYAZLASIR
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

  // HANGI SAYFADA OLDUGUMUZ BELLI OLSUN
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

  if (window.location.pathname === "/home.html") {
    document.body.classList.add("home-page");
    headerLinks[0].classList.add("active");
  }

  window.addEventListener("load", updateActivateLink);
  window.addEventListener("hashchange", updateActivateLink);
});

// Typewriter Effect for fatima
const fatimaElement = document.querySelector(".fatima");
const fatimaText = fatimaElement.textContent.trim();
const fatimaInterval = 100;

function typeWriterFatima() {
  fatimaElement.textContent = "";
  let fatimaIndex = 0;

  function type() {
    if (fatimaIndex < fatimaText.length) {
      fatimaElement.textContent += fatimaText.charAt(fatimaIndex);
      fatimaIndex++;
      setTimeout(type, fatimaInterval);
    } else {
      fatimaElement.innerHTML += '<span class="cursor">|</span>';
      setTimeout(typeWriterFatima, 2000);
    }
  }
  type();
}

typeWriterFatima();

// Typewriter Effect for ismail
const ismailElement = document.querySelector(".ismail");
const ismailText = ismailElement.textContent.trim();
const ismailInterval = 100;

function typeWriterIsmail() {
  ismailElement.textContent = "";
  let ismailIndex = 0;

  function type() {
    if (ismailIndex < ismailText.length) {
      ismailElement.textContent += ismailText.charAt(ismailIndex);
      ismailIndex++;
      setTimeout(type, ismailInterval);
    } else {
      ismailElement.innerHTML += '<span class="cursor">|</span>';
      setTimeout(typeWriterIsmail, 2000);
    }
  }
  type();
}

typeWriterIsmail();

// SCROLL YAPINCA CONTAINER BASINA GELMESI
document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault(); // Linkin varsayılan davranışını engeller

  const landingPageEnd =
    document.querySelector(".landingpage").offsetHeight +
    document.querySelector(".landingpage").offsetTop;
  const headerHeight = document.querySelector("header").offsetHeight; // Header yüksekliğini al
  const scrollToPosition = landingPageEnd - headerHeight; // Header yüksekliğini landing page bitişinden çıkar

  // Belirli bir konuma kaydır
  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth", // İsteğe bağlı: Yumuşak kaydırma efekti
  });
});
