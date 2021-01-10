const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu-items");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const textone = document.querySelector("#one");
const texttwo = document.querySelector("#two");
const textthree = document.querySelector("#three");
const textfour = document.querySelector("#four");
let toggleMarker = 1;
let sliderToggle = 1;
const menuToggle = (choice) => {
  toggleMarker = choice;
  console.log(toggleMarker);
  if (toggleMarker === 1) {
    hamburger.classList.remove("menu-toggle");
    close.classList.add("menu-toggle");
    menu.classList.add("menu-hide");
  } else {
    hamburger.classList.add("menu-toggle");
    close.classList.remove("menu-toggle");
    menu.classList.remove("menu-hide");
  }
};
const SliderToggler = (choice) => {
  sliderToggle = choice;
  if (sliderToggle === 1) {
    one.classList.add("active-div");
    two.classList.remove("active-div");
    three.classList.remove("active-div");
    four.classList.remove("active-div");
    textone.style.left = 0;
    textone.classList.remove("activecard");
    textone.classList.add("inactivecard");
    texttwo.style.left = 100 + "%";
    textthree.style.left = 100 + "%";
    textfour.style.left = 100 + "%";
  } else if (sliderToggle === 2) {
    one.classList.remove("active-div");
    two.classList.add("active-div");
    three.classList.remove("active-div");
    four.classList.remove("active-div");
    textone.style.left = 100 + "%";
    texttwo.style.left = 0;
    textthree.style.left = 100 + "%";
    textfour.style.left = 100 + "%";
    console.log(choice);
  } else if (sliderToggle === 3) {
    one.classList.remove("active-div");
    two.classList.remove("active-div");
    three.classList.add("active-div");
    four.classList.remove("active-div");
    textone.style.left = 100 + "%";
    textthree.style.left = 100 + "%";
    textthree.style.left = 0;
    textfour.style.left = 100 + "%";
    console.log(choice);
  } else {
    one.classList.remove("active-div");
    two.classList.remove("active-div");
    three.classList.remove("active-div");
    four.classList.add("active-div");
    textone.style.left = 100 + "%";
    textthree.style.left = 100 + "%";
    textfour.style.left = 100 + "%";
    textfour.style.left = 0;
    console.log(choice);
  }
};
hamburger.addEventListener("click", () => menuToggle(2));
close.addEventListener("click", () => menuToggle(1));
one.addEventListener("click", () => SliderToggler(1));
two.addEventListener("click", () => SliderToggler(2));
three.addEventListener("click", () => SliderToggler(3));
four.addEventListener("click", () => SliderToggler(4));
