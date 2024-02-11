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
// function showbilgiBox(index) {
//     // Tüm bilgikutusu div'lerini gizle
//     hidebilgiBox();

//     // Sadece ilgili bilgikutusu div'ini göster
//     var bilgiBox = document.getElementById('bilgiBox' + index);
//     bilgiBox.style.display = 'block';
//   }

 
  
//     function hidebilgiBox() {
//       // Tüm bilgikutusu div'lerini gizle
//       for (var i = 1; i <= 7; i++) {
//         var bilgiBox = document.getElementById('bilgiBox' + i);
//         bilgiBox.style.display = 'none';
//       }
//     }

//elemlarlar baslik animasyon
document.addEventListener("DOMContentLoaded", function() {
  var elemanBaslik = document.querySelector('.eleman-baslik');
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateElement() {
    if (isElementInViewport(elemanBaslik)) {
      elemanBaslik.classList.add('slideIn');
      document.removeEventListener('scroll', animateElement);
    }
  }

  document.addEventListener('scroll', animateElement);
});



//counter part deneme

// const counts=document.querySelectorAll(".count")
// const speed=97
// counts.forEach((counter)=> {
//   function  upData(){
//     const target=Number(counter.getAttribute('data-target'))
//     const count =Number(counter.innerHTML)
//     const inc=target/speed
//     if(count<target){
//       counter.innerHTML=inc+count
//       setTimeout(upData,8)
//     }else{
//       counter.innerHTML=target
//     }
//   }
//   upData()

// })


//counter part 2

// const myNum = document.querySelectorAll('.count')
// // console.log(myNum.innerText)
// let speed = 1;

// myNum.forEach( (myCount) => {
    
    
//     let target_count = myCount.dataset.count;
//     let init_count = +myCount.innerText;
//     // console.log(target_count)
    
//     let new_increment_num = Math.floor(target_count / speed);
    
//     const updateNumber = () => {
//         init_count +=  new_increment_num;
//         myCount.innerText = init_count;
        
//         if(init_count < target_count){
//             setTimeout(() => {updateNumber()}, 5)
//         }
//     }
    
//     updateNumber();
    
// })
const myNum = document.querySelectorAll('.count');
const animationDuration = 1000; // Animasyonun toplam süresi (ms)
const framesPerSecond = 30; // Saniyedeki çerçeve sayısı

myNum.forEach((myCount) => {
    let target_count = parseInt(myCount.dataset.count);
    let init_count = +myCount.innerText;

    let increment = (target_count - init_count) / (animationDuration / 1000 * framesPerSecond);
    let current_count = init_count;

    const updateNumber = () => {
        current_count += increment;
        if (current_count < target_count) {
            myCount.innerText = Math.round(current_count); // Sayıyı yuvarlayarak güncelleyin
            setTimeout(updateNumber, 3000 / framesPerSecond);
        } else {
            myCount.innerText = target_count; // Hedef sayıya ulaşıldığında doğrudan hedef sayıyı ayarlayın
        }
    }

    updateNumber();
});

//button animation
document.addEventListener("DOMContentLoaded", function() {
  var elemanBaslik = document.querySelector('.btn');
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateElement() {
    if (isElementInViewport(elemanBaslik)) {
      elemanBaslik.classList.add('slideIn');
      document.removeEventListener('scroll', animateElement);
    }
  }

  document.addEventListener('scroll', animateElement);
});

