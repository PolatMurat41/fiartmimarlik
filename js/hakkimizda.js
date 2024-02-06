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

  if (window.location.pathname === "/hakkimizda.html") {
    document.body.classList.add("hakkimizda-page");
    headerLinks[2].classList.add("active");
  }

  window.addEventListener("load", updateActivateLink);
  window.addEventListener("hashchange", updateActivateLink);
});

// bilgi kutusu
function showbilgiBox(index) {
    // Tüm bilgikutusu div'lerini gizle
    hideAllbilgiBox();

    // Sadece ilgili bilgikutusu div'ini göster
    var bilgiBox = document.getElementById('bilgiBox' + index);
    bilgiBox.style.display = 'block';
  }

  function hideAllbilgiBox() {
    // Tüm bilgikutusu div'lerini gizle
    for (var i = 1; i <=4; i++) {
        var bilgiBox = document.getElementById('bilgiBox' + i);
        bilgiBox.style.display = 'none';
      }
    }
  
    function hidebilgiBox() {
      // Tüm bilgikutusu div'lerini gizle
      for (var i = 1; i <= 4; i++) {
        var bilgiBox = document.getElementById('bilgiBox' + i);
        bilgiBox.style.display = 'none';
      }
    }
// bilgi kutusu
