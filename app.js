// function navSlide() {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   // Toggle nav
//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");

//     // Animate links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 5.5 + 0.7
//         }s`;
//       }
//     });
//     // Burger animation
//     burger.classList.toggle("toggle");
//   });
// }

// navSlide();

// const slides = document.querySelectorAll(".slide");
// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");
// const auto = true;
// const intervalTime = 5000;
// let slideInterval;

// const nextSlide = () => {
//   // Get current class
//   const current = document.querySelector(".current");
//   // Remove current class
//   current.classList.remove(".current");
//   // Check for next slide
//   if (current.nextElementSibling) {
//     // Add current to next sibling
//     current.nextElementSibling.classList.add("current");
//   } else {
//     // Add current to start
//     slides[0].classList.add("current");
//   }
//   setTimeout(() => current.classList.remove("current"));
// };

// const prevSlide = () => {
//   // Get current class
//   const current = document.querySelector(".current");
//   // Remove current class
//   current.classList.remove(".current");
//   // Check for next slide
//   if (current.previousElementSibling) {
//     // Add current to next sibling
//     current.previousElementSibling.classList.add("current");
//   } else {
//     // Add current to last
//     slides[slides.length - 1].classList.add("current");
//   }
//   setTimeout(() => current.classList.remove("current"));
// };

// // Button events
// next.addEventListener("click", (e) => {
//   nextSlide();
//   // Reset Timer
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });
// prev.addEventListener("click", (e) => {
//   prevSlide();
//   // Reset Timer
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// // Auto slide
// if (auto) {
//   // Run next slide at interval time
//   slideInterval = setInterval(nextSlide, intervalTime);
// }

// const slides = document.querySelectorAll(".about-slide");
// const next = document.querySelector("#about-next");
// const prev = document.querySelector("#about-prev");
// const auto = true;
// const intervalTime = 5000;
// let slideInterval;

// const nextSlide = () => {
//   // Get current class
//   const current = document.querySelector(".about-current");
//   // Remove current class
//   current.classList.remove(".about-current");
//   // Check for next slide
//   if (current.nextElementSibling) {
//     // Add current to next sibling
//     current.nextElementSibling.classList.add("about-current");
//   } else {
//     // Add current to start
//     slides[0].classList.add("about-current");
//   }
//   setTimeout(() => current.classList.remove("about-current"));
// };

// const prevSlide = () => {
//   // Get current class
//   const current = document.querySelector(".about-current");
//   // Remove current class
//   current.classList.remove(".about-current");
//   // Check for next slide
//   if (current.previousElementSibling) {
//     // Add current to next sibling
//     current.previousElementSibling.classList.add("about-current");
//   } else {
//     // Add current to last
//     slides[slides.length - 1].classList.add("about-current");
//   }
//   setTimeout(() => current.classList.remove("about-current"));
// };

// // Button events
// next.addEventListener("click", (e) => {
//   nextSlide();
//   // Reset Timer
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });
// prev.addEventListener("click", (e) => {
//   prevSlide();
//   // Reset Timer
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// // Auto slide
// if (auto) {
//   // Run next slide at interval time
//   slideInterval = setInterval(nextSlide, intervalTime);
// }

/* Menu - Toggle between entrees and specials */

const btn_entrees = document.querySelector("#btn_entrees");
const btn_weekend = document.querySelector("#btn_weekend");
btn_entrees.addEventListener("click", (e) => {
  const menu_weekend_special = document.querySelector(".menu-weekend-special");
  const menu_entrees = document.querySelector(".menu-entrees");
  menu_weekend_special.style.display = "none";
  menu_entrees.style.display = "block";
  btn_entrees.style.color = "#ed421c";
  btn_weekend.style.color = "";
});

btn_weekend.addEventListener("click", (e) => {
  const menu_weekend_special = document.querySelector(".menu-weekend-special");
  const menu_entrees = document.querySelector(".menu-entrees");
  menu_weekend_special.style.display = "block";
  menu_entrees.style.display = "none";
  btn_entrees.style.color = "";
  btn_weekend.style.color = "#ed421c";
});
