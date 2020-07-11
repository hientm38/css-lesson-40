const header = document.querySelector("header");
const menu = document.querySelector(".filter-menu");
const hidden = document.querySelectorAll(".hide");
const hiddenMenu = document.querySelector(".home-intro");
const navSearch = document.querySelector(".nav-search");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const menuObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        hidden.forEach(item => item.classList.add("hidden-item"));
        navSearch.classList.add("nav-opacity");
    } else {
        hidden.forEach(item => item.classList.remove("hidden-item"));
        navSearch.classList.remove("nav-opacity");
    }
  });
},
sectionOneOptions);

menuObserver.observe(menu);
sectionOneObserver.observe(hiddenMenu);
