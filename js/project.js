


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

    if(window.location.pathname === '/projects.html'){
        document.body.classList.add("projects-page");
        headerLinks[1].classList.add("active");
    }

    window.addEventListener("load", updateActivateLink);
    window.addEventListener("hashchange", updateActivateLink);



    // MAIN-2 ICINDEKI IMAGE SAG SOL
    const slider = document.querySelector(".slider");

    function activate(e) {
        const items = document.querySelectorAll(".item");
        e.target.matches(".next") && slider.append(items[0]);
        e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);


    
});


//  PROJE SAYFASI SCROLL YAPARKEN YAZILARIN ORTAYA ÇIKISI START

/* const main = document.querySelector(".main-1");


const h1 = document.querySelector(".head-1");
const h2 = document.querySelector(".head-2");
const h3 = document.querySelector(".head-3");
const h4 = document.querySelector(".head-4");

const l1 = document.querySelector(".login-1");
const l2 = document.querySelector(".login-2");
const l3 = document.querySelector(".login-3");
const l4 = document.querySelector(".login-4");

main.addEventListener("scroll", () => {
    console.log(main.scrollTop);
    const unit = main.scrollTop;
    if(unit >= 0 && unit<100){
        h1.classList.remove("hide");
        l1.classList.remove("hide");        
    }else{
        h1.classList.add("hide");
        l1.classList.add("hide");
    }
    const section2StartPercentage = 20;
const section2Start = unit + (window.innerHeight * (section2StartPercentage / 100));
const section2End = section2Start + 100;

console.log("unit:", unit);
console.log("section2Start:", section2Start);
console.log("section2End:", section2End);

if (unit > section2Start && unit < section2End) {
    console.log("Section 2 active!");
    h2.classList.add("active");
    l2.classList.add("active");
} else {
    console.log("Section 2 not active.");
    h2.classList.remove("active");
    l2.classList.remove("active");
}



    if(unit > 1484 && unit < 1584){
        h3.classList.add("active");
        l3.classList.add("active");
    }
    else{
        h3.classList.remove("active");
        l3.classList.remove("active");
    }
    if(unit > 2227 && unit < 2327){
        h4.classList.add("active");
        l4.classList.add("active");
    }
    else{
        h4.classList.remove("active");
        l4.classList.remove("active");
    }
}) */


//  PROJE SAYFASI SCROLL YAPARKEN YAZILARIN ORTAYA ÇIKISI FINISH