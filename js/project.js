function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}

function changeImage(n) {
  const popupImg = document.getElementById("popupImg");
  const images = popupImg.getAttribute("data-images").split(", ");
  let currentIndex = parseInt(popupImg.getAttribute("data-currentIndex"));

  currentIndex += n;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  popupImg.src = images[currentIndex];
  popupImg.setAttribute("data-currentIndex", currentIndex);
}

const popupButtons = document.querySelectorAll(".popup-button");

popupButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const images = this.getAttribute("data-images").split(", ");
    const popupImg = document.getElementById("popupImg");
    popupImg.src = images[0];
    popupImg.setAttribute("data-images", images.join(", "));
    popupImg.setAttribute("data-currentIndex", 0);
    document.getElementById("imagePopup").style.display = "block";
  });
});

function moveSlider(t, direction) {
  const main2 = t.closest(".main-2");
  const slider = main2.querySelector(".slider");
  const items = slider.querySelectorAll(".item");

  if (direction === "next") {
    slider.appendChild(items[0]);
  } else if (direction === "prev") {
    slider.prepend(items[items.length - 1]);
  }
}

const main2NavButtons = document.querySelectorAll(".main-2 .nav img");

main2NavButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const direction = this.classList.contains("next") ? "next" : "prev";
    moveSlider(this, direction);
  });
});
