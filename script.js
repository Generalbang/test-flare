let closeNav = document.querySelector(".close");
let mobileNav = document.querySelector(".mobile-menu");
let openNav = document.querySelector(".nav");
let child = document.querySelectorAll(".mobile-menu li");

let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let moreBtn1 = document.querySelector(".more-btn-1");
let moreBtn2 = document.querySelector(".more-btn-2");

let close1 = document.querySelector(".close-btn-1");
let close2 = document.querySelector(".close-btn-2");

openNav.addEventListener("click", () => {
  mobileNav.style.display = "flex";
  openNav.style.display = "none";
});

closeNav.addEventListener("click", () => {
  mobileNav.style.display = "none";
  openNav.style.display = "flex";
});

child.forEach((c) =>
  c.addEventListener("click", function (e) {
    mobileNav.style.display = "none";
    openNav.style.display = "flex";
  })
);

btn1.addEventListener("click", function () {
  moreBtn1.style.display = "flex";
});
btn2.addEventListener("click", function () {
  moreBtn2.style.display = "flex";
});

close1.addEventListener("click", function () {
  moreBtn1.style.display = "none";
});
close2.addEventListener("click", function () {
  moreBtn2.style.display = "none";
});
