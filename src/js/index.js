import '../scss/style.scss'



function initialSwiper() {
  new Swiper(".swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },

    slidesPerView: "auto",
    spaceBetween: 16,
  });
}
window.innerWidth < 768 ? initialSwiper() : null;

const buttons = document.querySelectorAll(".brand-button");
let brands = document.querySelector(".brand-list");
let devices = document.querySelector(".devices-list");
let mainText = document.querySelector(".text");
let sideBar = document.querySelector(".side-bar");
let feedback = document.querySelector(".modal--feedback");
let call = document.querySelector(".modal--call");
let contentContainer = document.querySelector(".content-container");

let burger = document.querySelector(".header-icon--burger");
let buttonClose = document.querySelector(".side-button--close");
let modalClose = document.querySelectorAll(".feedback__icon--close");
let buttonCall = document.querySelectorAll(".header-icon--phone");
let buttonMessege = document.querySelectorAll(".header-icon--message");

let buttonBrands = buttons[0];
let buttonTextBrands = buttonBrands.querySelector("p");
let buttonArrowBrands = buttonBrands.querySelector("div");
let buttonDevices = buttons[1];
let buttonTextDevices = buttonDevices.querySelector("p");
let buttonArrowDevices = buttonDevices.querySelector("div");
let buttonRead = document.querySelector(".read-me");
let buttonTextArrow = document.querySelector(".read-me__icon");
let readText = document.querySelector(".read-me__text");

let countBrands = 1;
let countDevices = 1;
let countRead = 1;
let countSide = 1;
let countCall = 1;
let countFeedback = 1;


buttonBrands.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (countBrands < 2) {
    buttonTextBrands.innerHTML = "Скрыть";
    brands.style.height = "250px";
    buttonArrowBrands.classList.add("brand-button__arrow--down");
    countBrands++;
  } else {
    buttonTextBrands.innerHTML = "Показать всё";
    buttonArrowBrands.classList.remove("brand-button__arrow--down");
    countBrands--;
    brands.style.height = "162px";
  }
});

buttonDevices.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (countDevices < 2) {
    buttonTextDevices.innerHTML = "Скрыть";
    devices.style.height = "362px";
    devices.style.gap = window.innerWidth <= 1439 ? "24px" : "32px";
    buttonArrowDevices.classList.add("brand-button__arrow--down");
    countDevices++;
  } else {
    buttonTextDevices.innerHTML = "Показать всё";
    buttonArrowDevices.classList.remove("brand-button__arrow--down");
    countDevices--;
    devices.style.height = "162px";
  }
});


buttonRead.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (countRead < 2) {
    readText.textContent = "Скрыть";
    mainText.style.maxHeight = "max-content";
    buttonTextArrow.classList.add("read-me--down");
    countRead++;
  } else {
    readText.textContent = "Читать далее";
    buttonTextArrow.classList.remove("read-me--down");
    countRead--;
    mainText.style.maxHeight = window.innerWidth < 768 ? "90px" : "140px";
  }
});

burger.addEventListener("click", () => {
  if (countSide < 2) {
    sideBar.style.left = "0px";
    contentContainer.style.opacity = "0.3";
    countSide++;
  }
});


buttonCall.forEach((button) => {
  button.addEventListener("click", () => {
    if (countCall < 2) {
      contentContainer.style.opacity = "0.3";
      call.style.right = "0px";
      sideBar.style.left = window.innerWidth < 1440 ? "-360px" : "0px";
      if (window.innerWidth >= 1440) {
        sideBar.style.opacity = '0.3';
      }
      countCall++;
    }
  });
});


buttonMessege.forEach((button) => {
  button.addEventListener("click", () => {
    if (countFeedback < 2) {
      feedback.style.right = "0px";
      window.innerWidth >= 1440 ? sideBar.style.opacity = '0.3' : null
      contentContainer.style.opacity = "0.3";
      sideBar.style.left = window.innerWidth < 1440 ? "-360px" : "0px";
      countFeedback++;
    }
  });
});


document.addEventListener("click", (event) => {
  if (
    countSide > 0 &&
    !sideBar.contains(event.target) &&
    !burger.contains(event.target) &&
    !buttonCall[1].contains(event.target) &&
    !buttonMessege[1].contains(event.target)
  ) {
    if (window.innerWidth < 1440) {
      contentContainer.style.opacity = '1'
      sideBar.style.left = window.innerWidth < 1440 ? "-360px" : "0px";
      countSide = 1;
    }
    if (window.innerWidth >= 1440) {
      contentContainer.style.opacity = '1'
      sideBar.style.opacity = '1'
      sideBar.style.left = window.innerWidth < 1440 ? "-360px" : "0px";
      countSide = 1;
    }
  }

  if (
    countCall > 0 &&
    !call.contains(event.target) &&
    !Array.from(buttonCall).some((button) => button.contains(event.target))
  ) {
    call.style.right = "-540px";
    countCall = 1;
  }

  if (
    countFeedback > 0 &&
    !feedback.contains(event.target) &&
    !Array.from(buttonMessege).some((button) => button.contains(event.target))
  ) {
    feedback.style.right = "-540px";
    countFeedback = 1;
  }
  
});

buttonClose.addEventListener("click", (event) => {
  sideBar.style.left = window.innerWidth < 1440 ? "-360px" : "0px";
  contentContainer.style.opacity = '1'
  countSide = 1;
});

modalClose[1].addEventListener("click", (event) => {
  call.style.right = "-540px";
  contentContainer.style.opacity = '1'
  countCall = 1;
});

modalClose[0].addEventListener("click", (event) => {
  feedback.style.right = "-540px";
  contentContainer.style.opacity = '1'
  countFeedback = 1;
  
});




