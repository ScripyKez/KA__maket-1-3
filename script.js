const slider = document.querySelector(".swiper");

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      slideClass: "card",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

const btn = document.querySelector(".read-more");
const changingEl = document.querySelector(".read-more").previousSibling;
let isOpen = false;

function onClick() {
  
  if (isOpen === false) {
    isOpen = true;
    changingEl.previousElementSibling.style.height = "auto";
    return;
  }

  isOpen = false;
  changingEl.previousElementSibling.style.height = "170px";

  console.log(`isOpen`, isOpen);
}

btn.addEventListener("click", onClick);
