function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5.5 + 0.7
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
}

navSlide();

const slides = document.querySelectorAll(".about-slide");
const next = document.querySelector("#about-next");
const prev = document.querySelector("#about-prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".about-current");
  // Remove current class
  current.classList.remove(".about-current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("about-current");
  } else {
    // Add current to start
    slides[0].classList.add("about-current");
  }
  setTimeout(() => current.classList.remove("about-current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".about-current");
  // Remove current class
  current.classList.remove(".about-current");
  // Check for next slide
  if (current.previousElementSibling) {
    // Add current to next sibling
    current.previousElementSibling.classList.add("about-current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("about-current");
  }
  setTimeout(() => current.classList.remove("about-current"));
};

// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  // Reset Timer
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  // Reset Timer
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
