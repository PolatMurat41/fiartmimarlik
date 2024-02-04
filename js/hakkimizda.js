

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
        headerLinks[1].classList.add("active");
    }

    window.addEventListener("load", updateActivateLink);
    window.addEventListener("hashchange", updateActivateLink);
});




function showInfo(employeeInfo, employeeName) {
    var employeeInfoText = document.getElementById("employeeInfoText");
    var employeeNameElement = document.getElementById("employeeName");
    
    // İlgili bilgileri info-box içinde göster
    employeeInfoText.innerHTML = employeeInfo;
    employeeNameElement.innerHTML = employeeName;
    document.getElementById("infoContainer").style.display = "block";
}

// Diğer employeeXInfo fonksiyonlarını benzer şekilde güncelleyebilirsiniz

// Örneğin:
function showEmployee1Info() {
    showInfo('Çalışan 2 Bilgileri', 'Çalışan 2');
}

function showEmployee2Info() {
    showInfo('Çalışan 3 Bilgileri', 'Çalışan 3');
}
function showEmployee3Info() {
    showInfo('Çalışan 3 Bilgileri', 'Çalışan 3');
}
function showEmployee4Info() {
    showInfo('Çalışan 3 Bilgileri', 'Çalışan 3');
}
function showEmployee5Info() {
    showInfo('Çalışan 3 Bilgileri', 'Çalışan 3');
}
function showEmployee6Info() {
    showInfo('Çalışan 3 Bilgileri', 'Çalışan 3');
}
.
