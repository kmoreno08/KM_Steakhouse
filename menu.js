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
        link.style.animation = `navLinkFade 0.4s ease forwards ${
          index / 5.5 + 0.7
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
}

navSlide();

/* Menu - Toggle between entrees and specials */
const btn_entrees = document.querySelector("#btn_entrees");
const btn_weekend = document.querySelector("#btn_weekend");
btn_entrees.addEventListener("click", (e) => {
  const menu_weekend_special = document.querySelector(".menu-weekend-special");
  const menu_entrees = document.querySelector(".menu-entrees-grid");
  menu_weekend_special.style.display = "none";
  menu_entrees.style.display = "grid";
  btn_entrees.style.color = "#ed421c";
  btn_weekend.style.color = "";
  event.preventDefault();
});

btn_weekend.addEventListener("click", (e) => {
  const menu_weekend_special = document.querySelector(".menu-weekend-special");
  const menu_entrees = document.querySelector(".menu-entrees-grid");
  menu_weekend_special.style.display = "flex";
  menu_entrees.style.display = "none";
  btn_entrees.style.color = "";
  btn_weekend.style.color = "#ed421c";
  event.preventDefault();
});

// Hours and locations
//Google Map *When site is live activate account*
function initMap() {
  // Map options
  let options = {
    zoom: 14,
    center: { lat: 34.01688, lng: -118.49671 },
  };

  // new Map
  let map = new google.maps.Map(document.getElementById("map"), options);

  // Add Marker
  var marker = new google.maps.Marker({
    postion: { lat: 34.01688, lng: -118.49671 },
    map: map,
  });
}
