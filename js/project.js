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

function next(t) {
  const slider = t.parentElement.parentElement.querySelector(".slider");
  const items = slider.querySelectorAll(".item");
  slider.appendChild(items[0]);
}

function prev(t) {
  const slider = t.parentElement.parentElement.querySelector(".slider");
  const items = slider.querySelectorAll(".item");
  slider.prepend(items[items.length - 1]);
}

const navButtons = document.querySelectorAll(".nav img");

function activate(e) {
  const slider = e.target.parentElement.parentElement.querySelector(".slider");
  const items = slider.querySelectorAll(".item");
  if (e.target.classList.contains("next")) {
    slider.appendChild(items[0]);
  } else if (e.target.classList.contains("prev")) {
    slider.prepend(items[items.length - 1]);
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", activate);
});
