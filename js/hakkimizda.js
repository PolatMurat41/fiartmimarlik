

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

    function updateActivateLink(){
        var currentURL = window.location.href;

        headerLinks.forEach(function (link) {
            var linkURL = link.href;

            if(currentURL.includes(linkURL) && !link.classList.contains("active")){
                headerLinks.forEach(function (otherLink){
                    otherLink.classList.remove("active")
                });

                link.classList.add("active")
            }
        });
    }

    if(window.location.pathname === '/hakkimizda.html'){
        document.body.classList.add("hakkimizda-page");
        headerLinks[2].classList.add("active");
    }

    window.addEventListener("load", updateActivateLink);
    window.addEventListener("hashchange", updateActivateLink);
});


// bilgi kutusu


var bilgiMetinleri = [
    "Bu bilgi 1. kart ile ilgili.",
    "Bu bilgi 2. kart ile ilgili.",
    "Bu bilgi 3. kart ile ilgili.",
    "Bu bilgi 4. kart ile ilgili."
];


function showbilgiBox(index) {
    var bilgiBox = document.getElementById('bilgiBox');
    bilgiBox.innerHTML = bilgiMetinleri[index - 1];
    bilgiBox.style.display = 'block';
}

function hidebilgiBox() {
    var bilgiBox = document.getElementById('bilgiBox');
    bilgiBox.style.display = 'none';
}
// bilgi kutusu




